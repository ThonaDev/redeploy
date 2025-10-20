import React, { useState, useRef, useEffect } from "react";
import {
  FiCamera,
  FiUploadCloud,
  FiChevronDown,
  FiX,
  FiEye,
} from "react-icons/fi";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useGetUserQuery,
  useGetPositionsQuery,
  useGetSkillsQuery,
  useUpdateUserMutation,
  useUploadMediaMutation,
  useCreateCVMutation,
  useGetUserCVsQuery,
} from "../../features/api/apiSlice";

// --- Validation Schema ---
const profileSchema = z.object({
  fullName: z
    .string()
    .min(3, "Full name must be at least 3 characters")
    .nonempty("Full name is required"),
  email: z.string().email("Enter a valid email").nonempty("Email is required"),
  contact: z
    .string()
    .regex(/^\d{9,12}$/, "Contact must be a valid phone number (9-12 digits)")
    .optional()
    .or(z.literal("")),
  jobTitle: z.string().optional().or(z.literal("")),
  gender: z.enum(["Male", "Female", "Other"]).optional().or(z.literal("")),
  skills: z.array(z.string()).optional(),
  bio: z.string().max(200, "Bio must be less than 200 characters").optional(),
});

// --- Helper Components ---
const FormInput = ({
  label,
  id,
  type = "text",
  register,
  errors,
  placeholder = "",
}) => (
  <div className="flex flex-col">
    <label htmlFor={id} className="text-sm font-normal text-[#1A5276] mb-1">
      {label} <span className="text-red-500">*</span>
    </label>
    <input
      type={type}
      id={id}
      {...register(id)}
      placeholder={placeholder}
      className={`px-4 py-3 border border-[#1A5276] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1A5276] text-[#1A5276] transition duration-150 ease-in-out hover:border-[#149AC5] ${
        errors[id] ? "border-red-500" : ""
      }`}
    />
    {errors[id] && (
      <p className="text-red-500 text-sm mt-1">{errors[id].message}</p>
    )}
  </div>
);

const FormSelect = ({
  label,
  id,
  multiple = false,
  value,
  onChange,
  options,
  errors,
}) => (
  <div className="flex flex-col">
    <label htmlFor={id} className="text-sm font-normal text-[#1A5276] mb-1">
      {label} {multiple ? "" : ""}
    </label>
    <div className="relative">
      <select
        id={id}
        multiple={multiple}
        value={value || (multiple ? [] : "")}
        onChange={onChange}
        className={`appearance-none block w-full px-4 py-3 border border-[#1A5276] rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-[#1A5276] text-[#1A5276] transition duration-150 ease-in-out cursor-pointer hover:border-[#149AC5] ${
          errors[id] ? "border-red-500" : ""
        } ${multiple ? "h-24" : ""}`}
      >
        {!multiple && <option value="">Select a {label}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {!multiple && (
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-[#1A5276]">
          <FiChevronDown className="w-5 h-5" />
        </div>
      )}
    </div>
    {errors[id] && (
      <p className="text-red-500 text-sm mt-1">{errors[id].message}</p>
    )}
  </div>
);

const FormTextarea = ({
  label,
  id,
  register,
  errors,
  rows = 3,
  placeholder = "",
  maxLength,
}) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [register(id).value]);

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-sm font-normal text-[#1A5276] mb-1">
        {label}
      </label>
      <textarea
        ref={textareaRef}
        id={id}
        {...register(id)}
        rows={rows}
        placeholder={placeholder}
        maxLength={maxLength}
        className={`px-4 py-3 border border-[#1A5276] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1A5276] text-[#1A5276] transition duration-150 ease-in-out resize-none overflow-hidden hover:border-[#149AC5] ${
          errors[id] ? "border-red-500" : ""
        }`}
        style={{ minHeight: `${rows * 1.5}em` }}
      />
      {errors[id] && (
        <p className="text-red-500 text-sm mt-1">{errors[id].message}</p>
      )}
    </div>
  );
};

// --- Main Component ---
const ProfileDetail = () => {
  const fileInputRef = useRef(null);
  const cvInputRef = useRef(null);

  const {
    data: userData,
    isLoading: userLoading,
    error: userError,
  } = useGetUserQuery();
  const {
    data: positionsData,
    isLoading: positionsLoading,
    error: positionsError,
  } = useGetPositionsQuery();
  const {
    data: skillsData,
    isLoading: skillsLoading,
    error: skillsError,
  } = useGetSkillsQuery();
  const [updateUser, { isLoading: isUpdating, error: updateError }] =
    useUpdateUserMutation();
  const [uploadMedia, { isLoading: isUploadingMedia, error: uploadError }] =
    useUploadMediaMutation();
  const [createCV, { isLoading: isCreatingCV, error: createCVError }] =
    useCreateCVMutation();
  const {
    data: latestCV,
    isLoading: cvLoading,
    error: cvError,
  } = useGetUserCVsQuery(userData?.uuid, {
    skip: !userData?.uuid, // Skip query until userData is available
  });

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      fullName: "",
      email: "",
      contact: "",
      jobTitle: "",
      gender: "",
      skills: [],
      bio: "",
    },
  });

  const [profileImage, setProfileImage] = useState(
    "https://placehold.co/200x200"
  );
  const [hasFallback, setHasFallback] = useState(false);
  const [cvFileName, setCvFileName] = useState(null);

  useEffect(() => {
    if (userData) {
      console.log("userData:", userData); // Debug user data
      const skills = userData.skills?.map((skill) => skill.skillName) || [];
      const normalizedGender = userData.gender
        ? userData.gender.toLowerCase() === "male"
          ? "Male"
          : userData.gender.toLowerCase() === "female"
          ? "Female"
          : userData.gender.toLowerCase() === "other"
          ? "Other"
          : ""
        : "";
      reset({
        fullName: userData.name || "",
        email: userData.email || "",
        contact: userData.phoneNumber || "",
        jobTitle: userData.positions?.[0]?.title || "",
        gender: normalizedGender,
        skills: skills,
        bio: userData.bio || "",
      });
      if (userData.profile) {
        const VITE_BASE_URL =
          import.meta.env.VITE_BASE_URL || "http://localhost:3000";
        const profileUrl = userData.profile.startsWith("http")
          ? userData.profile
          : `${VITE_BASE_URL}/${userData.profile}`;
        setProfileImage(profileUrl);
      }
    }
  }, [userData, reset]);

  useEffect(() => {
    if (latestCV) {
      console.log("Latest CV:", latestCV); // Debug latest CV data
      console.log("CV fileUrl:", latestCV.fileUrl);
    } else if (cvError) {
      console.error("CV fetch error:", cvError);
    }
  }, [latestCV, cvError]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!["image/jpeg", "image/png"].includes(file.type)) {
        toast.error("Please upload a valid image (JPG or PNG).");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        // 5MB limit
        toast.error("Image size must be less than 5MB.");
        return;
      }
      const newImageUrl = URL.createObjectURL(file);
      setProfileImage(newImageUrl);
      setHasFallback(false);
    }
  };

  const handleCVChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== "application/pdf") {
        toast.error("Please upload a valid PDF file.");
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        // 10MB limit for CV
        toast.error("CV file size must be less than 10MB.");
        return;
      }
      setCvFileName(file.name);
    } else {
      setCvFileName(null);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const triggerCVInput = () => {
    cvInputRef.current.click();
  };

  const handleViewCV = () => {
    if (latestCV && latestCV.fileUrl) {
      console.log("Attempting to open CV:", latestCV.fileUrl);
      if (!latestCV.fileUrl.toLowerCase().endsWith(".pdf")) {
        toast.error("Invalid CV file format. Please upload a valid PDF.");
        return;
      }
      window.open(latestCV.fileUrl, "_blank");
    } else {
      toast.error("No CV found. Please upload a CV first.");
    }
  };

  const onSubmit = async (data) => {
    try {
      const userId = userData?.uuid;
      if (!userId) {
        toast.error("User ID not found. Please log in again.");
        return;
      }

      let profileUrl = userData?.profile || "";
      if (fileInputRef.current?.files[0]) {
        const file = fileInputRef.current.files[0];
        console.log("Uploading profile photo:", file.name);
        const uploadResult = await uploadMedia(file).unwrap();
        console.log("Profile photo upload successful:", uploadResult);
        profileUrl = uploadResult.previewLink;
        toast.success("Profile photo uploaded successfully!");
      }

      let cvUrl = "";
      if (cvInputRef.current?.files[0]) {
        const file = cvInputRef.current.files[0];
        console.log("Uploading CV:", file.name);
        const uploadResult = await uploadMedia(file).unwrap();
        console.log("CV upload successful:", uploadResult);
        if (!uploadResult.previewLink.toLowerCase().endsWith(".pdf")) {
          toast.error("Uploaded CV is not a valid PDF. Please try again.");
          return;
        }
        cvUrl = uploadResult.previewLink;
        toast.success("CV uploaded successfully!");
      }

      const positionUuid =
        positionsData?.find((pos) => pos.title === data.jobTitle)?.uuid || "";
      const skillUuids = data.skills
        .map(
          (skillName) =>
            skillsData?.find((skill) => skill.skillName === skillName)?.uuid
        )
        .filter(Boolean);

      const jsonBody = {
        name: data.fullName,
        gender: data.gender.toUpperCase(),
        profile: profileUrl,
        coverPhoto: userData?.coverPhoto || "",
        phoneNumber: data.contact,
        bio: data.bio,
        isOtpAuthentication: false,
        expectedSalary: 0,
        positions: positionUuid ? [positionUuid] : [],
        skillUuids,
      };

      console.log("Submitting user update JSON:", jsonBody);
      const updateResult = await updateUser({
        userId,
        body: jsonBody,
      }).unwrap();
      console.log("User update successful:", updateResult);
      toast.success("Profile updated successfully!");

      if (cvUrl) {
        const cvBody = {
          userUuid: userId,
          fileUrl: cvUrl,
        };
        console.log("Submitting CV JSON:", cvBody);
        const cvResult = await createCV(cvBody).unwrap();
        console.log("CV creation successful:", cvResult);
        toast.success("CV saved successfully!");
      }
    } catch (error) {
      console.error(
        "Error:",
        error,
        "Status:",
        error.status,
        "Data:",
        error.data
      );
      if (error.status === "PARSING_ERROR") {
        toast.error(
          "Server error: " +
            (error.data || "Invalid response from server. Contact support.")
        );
      } else if (error.status === 400) {
        toast.error(
          "Invalid request: " +
            (error.data?.message ||
              "Please check your input or file and try again.")
        );
      } else if (error.status === 401) {
        toast.error("Unauthorized. Please log in again.");
      } else if (error.status === 403) {
        toast.error(
          "Permission denied. Check your account permissions or contact support."
        );
      } else {
        toast.error(
          "Failed to update profile or CV: " +
            (error.data?.message || "Please try again.")
        );
      }
    }
  };

  // Prepare position options
  const positionOptions = positionsData
    ? [
        ...positionsData.map((pos) => ({
          value: pos.title,
          label: pos.title,
        })),
        { value: "Others", label: "Others" },
      ]
    : [{ value: "Others", label: "Others" }];

  // Prepare skill options
  const skillOptions = skillsData
    ? [
        ...skillsData.map((skill) => ({
          value: skill.skillName,
          label: skill.skillName,
        })),
        { value: "Others", label: "Others" },
      ]
    : [{ value: "Others", label: "Others" }];

  if (userLoading || positionsLoading || skillsLoading || cvLoading) {
    return <div className="text-center p-8">Loading...</div>;
  }

  if (userError || positionsError || skillsError || cvError) {
    console.log("Errors:", { userError, positionsError, skillsError, cvError });
    return (
      <div className="text-center p-8 text-red-500">
        Error loading data:{" "}
        {userError?.data?.message ||
          positionsError?.data?.message ||
          skillsError?.data?.message ||
          cvError?.data?.message ||
          "Please try again."}
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white rounded-lg font-sans mt-8 mb-12">
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* COLUMN 1: Profile Picture */}
          <div className="col-span-1 flex flex-col items-center">
            <div className="relative mb-2 mx-auto">
              <h1 className="text-xl font-semibold text-[#1A5276] mb-8">
                Personal Detail
              </h1>
              <div className="w-50 h-50 rounded-full overflow-hidden border-3 border-[#1A5276]">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    if (!hasFallback) {
                      e.target.src = "https://placehold.co/200x200";
                      setHasFallback(true);
                    }
                  }}
                />
              </div>
              <button
                type="button"
                onClick={triggerFileInput}
                className="absolute bottom-0 left-1/2 transform -translate-x-4/5 translate-y-12 p-2 border-2 border-[#1A5276] rounded-full shadow-md hover:border-[#149AC5] transition z-10 bg-transparent"
                aria-label="Change profile picture"
              >
                <FiCamera className="w-4 h-4 text-[#1A5276] hover:text-[#149AC5]" />
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                accept="image/jpeg,image/png"
                className="hidden"
              />
            </div>
          </div>

          {/* COLUMN 2 */}
          <div className="col-span-1 space-y-4">
            <FormInput
              label="Full name"
              id="fullName"
              register={register}
              errors={errors}
              placeholder="Phat Phea"
            />
            <FormInput
              label="Email"
              id="email"
              type="email"
              register={register}
              errors={errors}
              placeholder="phartphea854@gmail.com"
            />
            <FormInput
              label="Contact"
              id="contact"
              register={register}
              errors={errors}
              placeholder="0969537167"
            />
            <Controller
              name="jobTitle"
              control={control}
              render={({ field }) => (
                <FormSelect
                  label="Job Title"
                  id="jobTitle"
                  value={field.value || ""}
                  onChange={(e) => field.onChange(e.target.value)}
                  options={positionOptions}
                  errors={errors}
                />
              )}
            />
          </div>

          {/* COLUMN 3 */}
          <div className="col-span-1 space-y-4">
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <FormSelect
                  label="Gender"
                  id="gender"
                  value={field.value || ""}
                  onChange={(e) => field.onChange(e.target.value)}
                  options={[
                    { value: "Male", label: "Male" },
                    { value: "Female", label: "Female" },
                    { value: "Other", label: "Other" },
                  ]}
                  errors={errors}
                />
              )}
            />
            <Controller
              name="skills"
              control={control}
              render={({ field }) => (
                <>
                  <FormSelect
                    label="Skill"
                    id="skills"
                    value=""
                    onChange={(e) => {
                      const selectedSkill = e.target.value;
                      if (
                        selectedSkill &&
                        !field.value.includes(selectedSkill)
                      ) {
                        const updatedSkills = [...field.value, selectedSkill];
                        field.onChange(updatedSkills);
                      }
                      e.target.value = ""; // Reset dropdown after selection
                    }}
                    options={skillOptions}
                    errors={errors}
                  />
                  <div className="mt-2 flex flex-wrap gap-2">
                    {field.value?.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center bg-[#ECF2FF] text-[#1A5276] px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                        <button
                          type="button"
                          onClick={() => {
                            const newSkills = field.value.filter(
                              (s) => s !== skill
                            );
                            field.onChange(newSkills);
                          }}
                          className="ml-2 text-[#1A5276] hover:text-[#149AC5]"
                        >
                          <FiX size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                </>
              )}
            />
            <FormTextarea
              label="Bio"
              id="bio"
              register={register}
              errors={errors}
              rows={1}
              placeholder="I love coding..."
              maxLength={200}
            />
          </div>
        </div>
        {/* Upload CV */}
        <div className="pt-4">
          <h2 className="text-xl font-medium text-[#1A5276] mb-3">Upload CV</h2>
          <div className="border border-[#1A5276] rounded-lg py-2 text-center hover:border-[#149AC5] transition duration-150 ease-in-out">
            <input
              type="file"
              ref={cvInputRef}
              id="cvUpload"
              className="hidden"
              accept="application/pdf"
              onChange={handleCVChange}
            />
            <label
              htmlFor="cvUpload"
              className="flex flex-col items-center justify-center text-[#1A5276] cursor-pointer"
            >
              <FiUploadCloud className="w-5 h-5 mb-2" />
              <span className="font-medium text-md">
                {cvFileName ? cvFileName : "Upload your CV (PDF)"}
              </span>
            </label>
          </div>
          <div className="mt-3 text-center">
            <button
              type="button"
              onClick={handleViewCV}
              className="flex items-center justify-center mx-auto px-4 py-2 bg-[#1A5276] text-white font-medium text-md rounded-lg shadow-md hover:bg-[#149AC5] focus:outline-none focus:ring-2 focus:ring-[#149AC5] transition duration-150 ease-in-out"
            >
              <FiEye className="w-5 h-5 mr-2" />
              View my current CV
            </button>
          </div>
        </div>
        {/* Save Button */}
        <div className="pt-6">
          <button
            type="submit"
            disabled={isUpdating || isUploadingMedia || isCreatingCV}
            className={`w-full py-2 bg-[#1A5276] text-white font-semibold text-lg rounded-lg shadow-md hover:bg-[#149AC5] focus:outline-none focus:ring-4 focus:ring-[#149AC5] transition duration-150 ease-in-out ${
              isUpdating || isUploadingMedia || isCreatingCV
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            {isUpdating || isUploadingMedia || isCreatingCV
              ? "Saving..."
              : "Save changes"}
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ProfileDetail;
