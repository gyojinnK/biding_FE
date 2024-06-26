"use server";

import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_KEY,
});

export async function inferImage(
  inputImage: string,
  prompt: string = "portrait, impressionist painting, loose brushwork, vibrant color, light and shadow play"
): Promise<string[]> {
  console.log("inferImage");
  const output = await replicate.run(
    "zsxkib/pulid:43d309c37ab4e62361e5e29b8e9e867fb2dcbcec77ae91206a8d95ac5dd451a0",
    {
      input: {
        prompt:
          "portrait, impressionist painting, loose brushwork, vibrant color, light and shadow play",
        cfg_scale: 1.2,
        num_steps: 4,
        image_width: 768,
        num_samples: 1,
        image_height: 1024,
        output_format: "webp",
        identity_scale: 0.8,
        mix_identities: false,
        output_quality: 80,
        generation_mode: "fidelity",
        main_face_image: inputImage,
        negative_prompt:
          "flaws in the eyes, flaws in the face, flaws, lowres, non-HDRi, low quality, worst quality,artifacts noise, text, watermark, glitch, deformed, mutated, ugly, disfigured, hands, low resolution, partially rendered objects,  deformed or partially rendered eyes, deformed, deformed eyeballs, cross-eyed,blurry",
      },
    }
  );
  return output as string[];
}
