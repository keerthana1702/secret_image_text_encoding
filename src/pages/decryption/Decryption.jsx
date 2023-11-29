import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";

const Decryption = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (acceptedFiles.length > 0) {
      setSelectedImage(acceptedFiles[0]);
      console.log(acceptedFiles[0]);
    } else {
      console.log("No valid image file selected");
    }
  }, []);

  const handleSelectImage = () => {
    setSelectedImage(null);
  };

  const handleDecryptedText = () => {
    console.log("Decrypted text");
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/jpeg, image/png",
  });

  return (
    <div className="flex flex-col items-center justify-center p-3">
      <h1 className="p-5 m-5 font-semibold text-7xl">DECRYPT THEM SECRET</h1>
      <div className="w-[50%] h-[50vh] p-5 max-w-xl bg-black mb-8 rounded-xl flex flex-col items-center justify-evenly min-w-max">
        {selectedImage ? (
          <>
            <img
              src={URL.createObjectURL(selectedImage)}
              alt={selectedImage.name}
              className="w-[70%] h-[70%] max-w-xs min-w-fit"
            />
            <div className="text-lg text-white">{selectedImage.name}</div>
            <div
              className="p-5 font-semibold bg-white rounded-lg cursor-pointer"
              onClick={handleSelectImage}
            >
              Select Image
            </div>
          </>
        ) : (
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            {isDragActive ? (
              <p className="block text-xl font-semibold text-white">
                Let it go....
              </p>
            ) : (
              <p className="block p-5 text-xl font-semibold text-white">
                Drag and Drop an Image here
              </p>
            )}
          </div>
        )}
      </div>
      <div
        className="p-5 text-white bg-black cursor-pointer rounded-2xl"
        onClick={handleDecryptedText}
      >
        Decrypted text
      </div>
    </div>
  );
};

export default Decryption;
