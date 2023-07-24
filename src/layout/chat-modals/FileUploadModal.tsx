import React, { useState } from 'react'
import Button from '../../components/UI/Button';
import { useTheme } from '../../store/theme-context';
import Modal from '../home/Modal';
import Close from '../../assets/close';
import { ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../Firebase';

const FileUploadModal = ({ onCancel }: { onCancel: () => void }) => {
    const { theme } = useTheme();
    const [img, setImg] = useState('');
    const handleClick = () => {
        const imgRef = ref(storage, `files/${"hello"}`)
        console.log(imgRef);

        // uploadBytes(imgRef, img)
    }
    return (
        <Modal className="bg-slate-100 opacity-90 rounded-lg lg:w-[70vh] xs:w-[40vh]  dark:bg-dimGray">
            <button
                className=" absolute top-5 right-5"
                onClick={() => {
                    onCancel();
                }}
            >
                {theme === "light" && <div children={<Close color="black" />} />}
                {theme === "dark" && <div children={<Close color="white" />} />}
            </button>
            <form>
                <div className="flex flex-col ">
                    <div className="mt-7 lg:w-[67vh] xs:w-[37vh]">
                        <label className="flex justify-center w-full h-32 px-4 transition border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                            <span className="flex items-center space-x-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-gray-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                    />
                                </svg>
                                <span className="font-medium text-gray-600">
                                    Drop files to Attach, or
                                    <span className="text-blue-600 underline mx-2">
                                        browse
                                    </span>
                                </span>
                            </span>

                            <input
                                type="file"
                                name="img_avatar"
                                id="img_avatar"
                                className="hidden"
                                onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
                                    if (ev?.target?.files) {
                                        console.log(ev?.target?.files[0]);
                                        // if (ev?.target?.files?.length > 0) {
                                        // setFieldValue("img_avatar", ev?.target?.files[0]);
                                        // }
                                    }
                                }}
                            />
                        </label>
                    </div>
                    <div className="flex gap-2 items-center justify-center mt-5 lg:w-[67vh] xs:w-[37vh]">
                        <Button
                            type="button"
                            variant="outlined"
                            color="primary"
                            children="Cancel"
                            onClick={() => onCancel()}
                            centerClassName="flex justify-center items-center"
                            buttonClassName="!px-3 font-poppins py-3 w-full"
                        />
                        <Button
                            // loading={isLoading}
                            onClick={() => handleClick()}
                            type="submit"
                            variant="filled"
                            color="primary"
                            children="Submit"
                            centerClassName="flex justify-center items-center"
                            buttonClassName="!px-3 font-poppins py-3 w-full"
                        />
                    </div>
                </div>
            </form>
        </Modal>
    )
}

export default FileUploadModal