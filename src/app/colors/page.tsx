"use client";
import Container from "@/components/ui/container";
import React, { useState } from "react";
import { TColorVariant, TemplateColors, getColorCodes } from "./utils";
import { cn } from "@/lib/utils";
import ColorToken from "./color-token";
import CodeArea from "./code-area";

type TColorsPage = {};

const ColorsPage: React.FC<TColorsPage> = ({}) => {
  const [primaryColors, setPrimaryColors] = useState<TColorVariant>(
    TemplateColors.blue
  );

  return (
    <Container className="py-6 flex flex-col gap-6">
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">1. Primary Color</h2>
          <p className="font-medium text-muted-foreground">
            primary color를 선택해주세요
          </p>
        </div>
        <div className="grid grid-cols-6 gap-2">
          {Object.keys(TemplateColors).map((color) => {
            const index: keyof typeof TemplateColors =
              color as keyof typeof TemplateColors;
            const selected = primaryColors === TemplateColors[index];
            return (
              <button
                key={color}
                onClick={() => setPrimaryColors(TemplateColors[index])}
                className={cn(
                  "flex gap-2 items-center p-2 rounded-md border",
                  selected ? " bg-brand-100 dark:bg-brand-400" : ""
                )}
              >
                <div
                  className={`w-6 h-6 rounded-full`}
                  style={{
                    backgroundColor: TemplateColors[index]?.[700],
                  }}
                ></div>
                <span>{color}</span>
              </button>
            );
          })}
        </div>
      </section>
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">2. Generated Token</h2>
          <p className="font-medium text-muted-foreground">
            생성된 컬러 토큰입니다
          </p>
        </div>
        <div className="grid grid-cols-2">
          <ColorToken mode="light" primaryColors={primaryColors} />
          <ColorToken mode="dark" primaryColors={primaryColors} />
        </div>
      </section>
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">3. Generated Code</h2>
          <p className="font-medium text-muted-foreground">
            생성된 코드입니다, global.css에 복붙해주세요
          </p>
        </div>
        <CodeArea code={getColorCodes(primaryColors)} />
      </section>
    </Container>
  );
};

export default ColorsPage;
