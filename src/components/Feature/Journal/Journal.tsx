import { ChangeEvent, useEffect, useState } from "react";
import { ProcessedImage } from "../../../../types";
import axios from "axios";

export default function Journal() {
  const emptyJournal = <p className="text-lg font-extralight">Void.</p>;
  const [file, setFile] = useState<File | null>(null);
  const [processedImage, setProcessedImage] = useState<ProcessedImage | null>(
    null
  );

  function handleFileSelect(event: ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;
    if (files) {
      setFile(files[0]);
    }
  }

  useEffect(() => {
    async function processImageToText(): Promise<ProcessedImage> {
      const formData = new FormData();
      formData.append("image", file as File);

      const response = await axios.post<ProcessedImage>(
        "https://ba2e-2603-8080-7201-eb00-cca2-f425-6dcd-6888.ngrok.io/process-image",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          timeout: 30000,
        }
      );

      console.log(response);

      return response.data;
    }

    if (file) {
      processImageToText()
        .then((processedImage) => {
          setProcessedImage(processedImage);
        })
        .catch((error) => setProcessedImage({ text: "sdfsdf" }));
    }
  }, [file]);

  return (
    <div className="w-full p-4">
      <div className="flex justify-between mb-2">
        <h5 className="text-neutral-400">Entries • March 27</h5>
        <label className="text-teal-500" htmlFor="journalFile">
          Import file
        </label>
        <input
          className="hidden"
          type="file"
          id="journalFile"
          name="journalFile"
          onChange={handleFileSelect}
        />
      </div>
      <div className="flex flex-col space-y-2 mb-2">
        {processedImage ? processedImage.text : emptyJournal}
      </div>
    </div>
  );
}
