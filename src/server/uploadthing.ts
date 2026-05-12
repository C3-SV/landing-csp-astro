import { createUploadthing, type FileRouter } from "uploadthing/server";

const f = createUploadthing();

const toNormalizedResponse = (
  file: {
    name: string;
    size: number;
    type: string;
    key: string;
    ufsUrl?: string;
    url?: string;
    appUrl?: string;
  },
) => {
  const fileUrl = file.ufsUrl || file.url || file.appUrl || "";
  if (!fileUrl) {
    console.warn("[UploadThing] Missing URL for file:", file.name);
  }
  return {
    name: file.name,
    size: file.size,
    type: file.type,
    key: file.key,
    url: fileUrl,
    ufsUrl: fileUrl,
    appUrl: fileUrl,
  };
};

export const ourFileRouter = {
  studentIdUploader: f({
    image: { maxFileCount: 1, maxFileSize: "2MB", minFileCount: 1 },
    pdf: { maxFileCount: 1, maxFileSize: "2MB", minFileCount: 1 },
  }).onUploadComplete(({ file }) => toNormalizedResponse(file)),

  consentUploader: f({
    image: { maxFileCount: 6, maxFileSize: "4MB", minFileCount: 1 },
    pdf: { maxFileCount: 6, maxFileSize: "4MB", minFileCount: 1 },
  }).onUploadComplete(({ file }) => toNormalizedResponse(file)),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;