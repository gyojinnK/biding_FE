"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { inferImage } from "./action";
import Container from "@/components/ui/container";
import FileUploader from "@/components/file-uploader";
import { FileUploadModule } from "@/lib/modules/file-upload";
import { useLoading } from "@/components/ui/use-loading";

type TAiPage = {};

const AiPage: React.FC<TAiPage> = ({}) => {
  const [imageURL, setImageURL] = React.useState<string>("");
  const [outputImageURL, setOutputImageURL] = React.useState<string>("");
  const { trigger, stop } = useLoading();

  async function onSubmit() {
    if (!imageURL) return;
    trigger();
    const output = await inferImage(imageURL);
    if (output.length < 1) return stop();
    setOutputImageURL(output[0]);
    stop();
  }
  return (
    <Container className="py-20">
      <FileUploader
        onChange={async (files) => {
          if (files.length < 1) return;
          trigger();
          const file = files[0];
          const fileUploader = new FileUploadModule();
          const data = await fileUploader.upload(file);
          const fileUrl =
            ("https://mqtswjgwbqobgmwcngww.supabase.co/storage/v1/object/public/codestation-bucket/" +
              data.path) as string;

          setImageURL(fileUrl);
          stop();
        }}
      />
      <h2>Preview</h2>
      {imageURL && <img src={imageURL} className="mt-4" alt="input" />}
      <Button onClick={onSubmit} disabled={!imageURL}>
        이미지 생성하기
      </Button>
      {outputImageURL && (
        <img src={outputImageURL} className="mt-4" alt="output" />
      )}
    </Container>
  );
};

export default AiPage;
