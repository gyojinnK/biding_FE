"use client";

import FileUploader from "@/components/file-uploader";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import React, { useCallback, useState } from "react";
import { IFaviconFiles, convertImageToFaviconFiles } from "./util";
import JSZip from "jszip";

type TFaviconPage = {};

const FaviconPage: React.FC<TFaviconPage> = ({}) => {
  const [file, setFile] = useState<File | null>(null);
  const [faviconFiles, setFaviconFiles] = useState<IFaviconFiles | null>(null);

  const downloadZip = useCallback(() => {
    if (!faviconFiles) return;
    const zip = new JSZip();
    zip.file("favicon.ico", faviconFiles.favicon);
    faviconFiles.icons.forEach((icon, i) => {
      zip.file(`icon${i + 1}.png`, icon);
    });
    faviconFiles.appleIcons.forEach((icon, i) => {
      zip.file(`apple-icon${i + 1}.png`, icon);
    });
    zip.generateAsync({ type: "blob" }).then((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "favicons.zip";
      a.click();
    });
  }, [faviconFiles]);
  return (
    <Container className="py-6 flex flex-col gap-6 min-h-screen">
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">1. Upload Image</h2>
          <p className="font-medium text-muted-foreground">
            Favicon으로 사용할 이미지를 업로드해주세요 (1024x1024)
          </p>
        </div>
        <FileUploader
          onChange={(files) => {
            setFile(null);
            if (files.length > 0) setFile(files[0]);
          }}
        />
      </section>
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">2. Generate Favicon</h2>
          <p className="font-medium text-muted-foreground">
            업로드한 이미지로 favicon을 생성해주세요
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-muted-foreground text-sm">Preview</span>
          {file ? (
            <img
              src={URL.createObjectURL(file)}
              alt="favicon"
              className="w-24 h-24"
            />
          ) : (
            <div className="w-24 h-24 bg-muted rounded-md" />
          )}
          <div className="w-fit">
            <Button
              disabled={!file}
              onClick={async () => {
                if (!file) return;
                const files = await convertImageToFaviconFiles(file);
                setFaviconFiles(files);
              }}
            >
              생성하기
            </Button>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">2. Download Favicon</h2>
          <p className="font-medium text-muted-foreground">
            생성된 favicon을 다운로드 받아주세요
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-muted-foreground text-sm">Favicon</span>
          <div className="flex gap-2">
            {faviconFiles?.favicon && (
              <a
                href={URL.createObjectURL(faviconFiles.favicon)}
                download="favicon.ico"
              >
                <img
                  src={URL.createObjectURL(faviconFiles.favicon)}
                  alt="favicon"
                />
              </a>
            )}
          </div>
          <span className="text-muted-foreground text-sm">Icons</span>
          <div className="flex gap-2">
            {faviconFiles?.icons.map((icon, i) => (
              <a
                key={i}
                href={URL.createObjectURL(icon)}
                download={`icon${i}.png`}
              >
                <img src={URL.createObjectURL(icon)} alt={`icon-${i}`} />
              </a>
            ))}
          </div>
          <span className="text-muted-foreground text-sm">Apple Icons</span>
          <div className="flex gap-2">
            {faviconFiles?.appleIcons.map((icon, i) => (
              <a
                key={i}
                href={URL.createObjectURL(icon)}
                download={`apple-icon${i}.png`}
              >
                <img src={URL.createObjectURL(icon)} alt={`apple-icon-${i}`} />
              </a>
            ))}
          </div>
        </div>
        <Button disabled={!faviconFiles} onClick={downloadZip}>
          Zip 파일로 다운로드
        </Button>
      </section>
    </Container>
  );
};

export default FaviconPage;
