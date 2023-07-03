import React, { useState } from 'react'
import Modal from './Modal'
import Close from '../../assets/close.svg'
import QuestionsModal from './QuestionsModal';
import { useFormik } from 'formik';

function PostCodeModal(props: { onCancel: () => void, open: boolean, onCancelAll: () => void }) {
    const [openQuestion, setOpenQuestion] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const postCodeList = [
        '123456',
        '234567',
        '345678',
        '123456',
        '234567',
        '345678',
        '123456',
        '234567',
        '345678'
    ]
    const formik = useFormik({
        initialValues: {
            postCode: "",
        },
        validate: (values) => {
            const errors: any = {};
            if (values.postCode.toString().length === 0) {
                errors.postCode = "Required"
            }
            return errors;
        },
        onSubmit: (values) => {
            console.log(values);

        }
    })

    return (
        <>
            {
                <QuestionsModal
                    open={openQuestion}
                    onCancel={() => {
                        setOpenQuestion(false);
                    }}
                    onCancelAll={() => {
                        setOpenQuestion(false);
                        props.onCancel()
                    }}
                />
            }

            {props.open && (<Modal className="bg-slate-100 opacity-90 rounded-lg">

                <button className=' absolute top-5 right-5' onClick={() => {
                    props.onCancelAll();
                }}><img src={Close} alt="" className='md:h-5 md:w-5 xs:h-4 xs:w-4' /></button>
                <div className='flex flex-col '>
                    <div className="flex xl:mt-1 md:mt-2">
                        <h1 className="text-black xl:text-lg md:text-md font-medium p-2">
                            Enter Post Code
                        </h1>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="flex gap-2 items-center ">
                            <input list='postCodeList' className='rounded-lg xl:h-12 lg:h-10 xs:h-10 w-full outline-none pl-3 text-[#707070]' type='text' placeholder="Post Code" id='postCode' name='postCode' onChange={formik.handleChange} value={formik.values.postCode} />
                            <button type="submit" onClick={() => {
                                setOpenSearch(true)
                            }} className="text-white bg-[#0003FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 xl:text-lg md:text-sm rounded-xl xl:h-12 lg:h-10 xs:h-10 md:px-8 xs:px-5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                        {formik.errors.postCode ? (
                            <div className="text-red-600 my-1 pl-5">
                                {formik.errors.postCode}
                            </div>
                        ) : null}
                        {postCodeList.length > 0 && openSearch && (
                            <div className="bg-white w-4/6 lg:h-48 xs:h-36 mt-2 z-[100] absolute overflow-y-auto rounded-xl ">
                                {postCodeList.map((d) => {
                                    return (
                                        <ul className="xl:text-lg lg:text-md xs:text-sm text-[#707070]">
                                            <button
                                                className="w-full"
                                                onClick={() => { setOpenQuestion(true), setOpenSearch(false), formik.setFieldValue('postCode', d) }}
                                                type='submit'
                                            >
                                                <li className="px-6 py-1 text-left">{d}</li>
                                            </button>
                                            <hr />
                                        </ul>
                                    );
                                })}
                            </div>
                        )}
                    </form>
                </div>
            </Modal>)}
        </>
    )
}

export default PostCodeModal