import { createUploadthing } from 'uploadthing/server';

const f = createUploadthing();
const toNormalizedResponse = (file) => {
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
    appUrl: fileUrl
  };
};
const ourFileRouter = {
  studentIdUploader: f({
    image: { maxFileCount: 1, maxFileSize: "2MB", minFileCount: 1 },
    pdf: { maxFileCount: 1, maxFileSize: "2MB", minFileCount: 1 }
  }).onUploadComplete(({ file }) => toNormalizedResponse(file)),
  consentUploader: f({
    image: { maxFileCount: 6, maxFileSize: "4MB", minFileCount: 1 },
    pdf: { maxFileCount: 6, maxFileSize: "4MB", minFileCount: 1 }
  }).onUploadComplete(({ file }) => toNormalizedResponse(file))
};

export { ourFileRouter as o };
