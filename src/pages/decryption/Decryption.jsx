import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";

const Decryption = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (acceptedFiles.length > 0) {
      // Take only the first accepted file as the selected image
      const firstAcceptedFile = acceptedFiles[0];
      setSelectedImage(firstAcceptedFile);
    } else {
      // Handle rejected files or other cases if needed
      console.log("No valid image file selected");
    }
  }, []);

  const handleSelectImage = () => {
    setSelectedImage(null);
  };

  const handleDecryptedText = () => {
    console.log("Decrypted text");
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: "image/jpeg, image/png",
  });

  return (
    <div className="flex flex-col justify-center p-3 align-middle ">
      <h1 className="p-5 m-5 font-semibold text-7xl">DECRYPT THEM SECRET</h1>
      <div className="drag-upload-image w-[50%] h-[50vh] p-5 max-w-xl flex flex-col self-center items-center justify-center bg-black mb-8 rounded-xl">
        {selectedImage ? (
          <>
            <div>
              {selectedImage && (
                <img src={URL.createObjectURL(selectedImage)} alt="" />
              )}
            </div>
            <span className="text-lg text-white ">
              {selectedImage && selectedImage.name}
            </span>
            <span
              className="p-5 font-semibold bg-white rounded-lg"
              onClick={handleSelectImage}
            >
              Select Image
            </span>
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
                Drag and Drop an IMage here
              </p>
            )}
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <div
          className="p-5 text-white bg-black rounded-2xl w-[50%]"
          onClick={handleDecryptedText}
        >
          Decrypted text
        </div>
      </div>
    </div>
  );
};

export default Decryption;
