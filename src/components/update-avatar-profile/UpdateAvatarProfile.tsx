/* eslint-disable @next/next/no-img-element */
"use client";
// import CropImageAvatarProfile from "@/components/CropImageAvatarProfile/CropImageAvatarProfile";
import { useAppDispatch, useAppSelector } from "@/stores/store";
import { convertBase64ToFile } from "@/utils/Convert/ConvertBase64ToFile";
// import { Backdrop, CircularProgress, Dialog, Skeleton } from "@mui/material";
import { ChevronLeft, Plus, X } from "lucide-react";
import React, { useRef, useState } from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

interface UpdateAvatarProfilePopupProps {
  open: boolean;
  onClose: any;
}

export default function UpdateAvatarProfilePopup({
  open,
  onClose,
}: UpdateAvatarProfilePopupProps) {
  const dispatch = useAppDispatch();
  const userState = useAppSelector((state) => state.userSlice);

  const [avatarSrc, setAvatarSrc] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleUploadImage = (e: any) => {
    const newFile = e.target.files[0];
    const allowedTypes = ["image/jpg", "image/jpeg", "image/png"];

    const reader = new FileReader();
    reader.onload = () => {
      setAvatarSrc(reader.result as string);
    };
    reader.readAsDataURL(newFile);
  };

  const handleCancelUploadAvatar = () => {
    setAvatarSrc(null);
  };

  const handleCloseUpdateAvatar = () => {
    handleCancelUploadAvatar();
    onClose();
  };

  const handleSubmit = async (base64UrlImage: any) => {
    const fullFileAvatar = await convertBase64ToFile(
      avatarSrc,
      `fullFile_avatar_${userState?.user?.userId}.jpg`
    );

    const cropAvatarFile = await convertBase64ToFile(
      base64UrlImage,
      `crop_avatar_${userState?.user?.userId}.jpg`
    );

    try {
      handleCloseUpdateAvatar();
      if (fileInputRef.current) {
        fileInputRef.current.value = ""; // Xóa phần tử input
      }
    } catch (err) {}
  };

  return (
    <Dialog open={open} onOpenChange={handleCloseUpdateAvatar}>
      <DialogContent className="bg-white" hideClose>
        <div className="px-2 pt-5 pb-6 font-sans">
          {avatarSrc === null ? (
            <div>
              <div className="flex justify-end">
                <button
                  className="w-10 h-10 rounded-full text-2xl opacity-70 hover:bg-black/10 flex justify-center items-center group"
                  onClick={handleCloseUpdateAvatar}
                >
                  <i>
                    <X
                      strokeWidth={2.75}
                      className="text-gray-500 group-hover:text-gray-950 w-6 h-6"
                    />
                  </i>
                </button>
              </div>
              <form className="px-6">
                <div>
                  <h2 className="text-2xl font-bold">Update avatar</h2>
                  <p className="mt-2 text-base opacity-90">
                    Keep Your Profile Fresh, Keep Making a Difference!
                  </p>
                </div>
                <div className="py-10 flex justify-around">
                  <figure
                    style={{
                      borderRadius: "50%",
                      overflow: "hidden",
                      width: "170px",
                      height: "170px",
                      position: "relative",
                    }}
                    className="border"
                  >
                    <img
                      src={userState?.user?.avatarLink}
                      width={170}
                      height={170}
                      alt="avatar"
                    />
                  </figure>
                </div>
                <div className="relative group">
                  <input
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    type="file"
                    ref={fileInputRef}
                    title=""
                    onChange={handleUploadImage}
                  />
                  <button
                    type="submit"
                    className="w-full flex items-center py-3 px-4 rounded-xl bg-gray-200 group-hover:bg-gray-300"
                  >
                    <div className="flex items-center gap-x-3">
                      <i>
                        <Plus
                          strokeWidth={2.5}
                          className="w-6 h-6 text-gray-600 group-hover:text-gray-800"
                        />
                      </i>
                      <span className="text-lg font-medium text-gray-600 group-hover:text-gray-800">
                        Upload new Avatar
                      </span>
                    </div>
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div>
              <div className="flex justify-between">
                <button
                  type="button"
                  className="w-10 h-10 rounded-full text-2xl opacity-70 hover:bg-black/10 flex justify-center items-center group"
                  onClick={handleCancelUploadAvatar}
                >
                  <i>
                    <ChevronLeft
                      strokeWidth={2.75}
                      className="text-gray-500 group-hover:text-gray-950 w-6 h-6"
                    />
                  </i>
                </button>
                <button
                  className="w-10 h-10 rounded-full text-2xl opacity-70 hover:bg-black/10 flex justify-center items-center group"
                  onClick={handleCloseUpdateAvatar}
                >
                  <i>
                    <X
                      strokeWidth={2.75}
                      className="text-gray-500 group-hover:text-gray-950 w-6 h-6"
                    />
                  </i>
                </button>
              </div>
              <form className="mt-2 px-6 flex flex-col gap-y-2">
                <h2 className="text-2xl font-bold">Preview</h2>
                <div className="py-3">
                  {/* <CropImageAvatarProfile
              image={avatarSrc}
              onSubmit={handleSubmit}
            /> */}
                </div>
              </form>
            </div>
          )}

          {/* <Backdrop
      sx={{
        color: "#fff",
        zIndex: (theme: any) => theme.zIndex.drawer + 1,
      }}
      open={userProfile.profilePrivate.statusUpdateAvatar === "loading"}
    >
      <CircularProgress color="inherit" />
    </Backdrop> */}
        </div>
      </DialogContent>
    </Dialog>
  );
}
