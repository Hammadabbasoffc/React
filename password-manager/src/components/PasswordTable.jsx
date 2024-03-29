import React, { useState } from 'react';
import { FiCopy, FiEye, FiEyeOff, FiEdit, FiTrash, FiSave } from 'react-icons/fi'; // Import necessary icons
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PasswordTable = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            URL: "google.com",
            userName: "Hello Hammad",
            password: "1hammad",
            passwordVisible: false, // Initially set to false for all items
            isEditing: false
        },
        {
            id: 2,
            URL: "google.com",
            userName: "Hello Abbas",
            password: "1hammad",
            passwordVisible: false, // Initially set to false for all items
            isEditing: false
        }
    ]);

    const copyToClipboard = (text) => {
        toast.success('Copied to Clipboard', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
        });
        navigator.clipboard.writeText(text);
    };

    const togglePasswordVisibility = (index) => {
        setItems(prevItems => {
            const updatedItems = [...prevItems];
            updatedItems[index] = { ...updatedItems[index], passwordVisible: !updatedItems[index].passwordVisible };
            return updatedItems;
        });
    };

    const toggleEdit = (index) => {
        setItems(prevItems => {
            const updatedItems = [...prevItems];
            updatedItems[index] = { ...updatedItems[index], isEditing: !updatedItems[index].isEditing };
            return updatedItems;
        });
    };

    const saveChanges = (index) => {
        // Here you can add logic to save changes to your data source (e.g., database)
        // For demonstration purposes, we will just toggle the editing mode
        toggleEdit(index);
    };

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="Bounce"
            />
            {/* Same as */}
            <ToastContainer />

            <div className='w-full absolute flex items-center justify-center mt-5 '>
                <table className="table-fixed rounded-md overflow-hidden w-[80%]">
                    <thead className='bg-green-500 text-white'>
                        <tr>
                            <th className='py-2'>URL</th>
                            <th className='py-2'>User Name</th>
                            <th className='py-2'>Password</th>
                            <th className='py-2'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={index} className='border-b-2'>
                                <td className='py-2 border border-white text-center'>
                                    {item.isEditing ? (
                                        <input
                                            className='w-[80%] border-none outline-none p-1 '
                                            type="text"
                                            value={item.URL}
                                            onChange={(e) => {
                                                const newValue = e.target.value;
                                                setItems(prevItems => {
                                                    const updatedItems = [...prevItems];
                                                    updatedItems[index] = { ...updatedItems[index], URL: newValue };
                                                    return updatedItems;
                                                });
                                            }}
                                        />
                                    ) : (
                                        <a href={`http://${item.URL}`} target='_blank'>{item.URL}</a>
                                    )}
                                    <button className="ml-2 text-gray-500" onClick={() => copyToClipboard(`http://${item.URL}`)}><FiCopy /></button>
                                </td>
                                <td className='py-2 border border-white text-center'>
                                    {item.isEditing ? (
                                        <input
                                            className='w-[80%] border-none outline-none p-1'
                                            type="text"
                                            value={item.userName}
                                            onChange={(e) => {
                                                const newValue = e.target.value;
                                                setItems(prevItems => {
                                                    const updatedItems = [...prevItems];
                                                    updatedItems[index] = { ...updatedItems[index], userName: newValue };
                                                    return updatedItems;
                                                });
                                            }}
                                        />
                                    ) : (
                                        item.userName
                                    )}
                                    <button className="ml-2 text-gray-500" onClick={() => copyToClipboard(item.userName)}><FiCopy /></button>
                                </td>
                                <td className='py-2 border  border-white px-2 text-center flex  flex-row justify-evenly items-center'>
                                    {item.isEditing ? (
                                        <input className='w-[70%] border-none outline-none p-1 '
                                        style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
                                            type={item.passwordVisible ? "text" : "password"}
                                            value={item.password}
                                            onChange={(e) => {
                                                const newValue = e.target.value;
                                                setItems(prevItems => {
                                                    const updatedItems = [...prevItems];
                                                    updatedItems[index] = { ...updatedItems[index], password: newValue };
                                                    return updatedItems;
                                                });
                                            }}
                                        />
                                    ) : (
                                        item.passwordVisible ? item.password : "••••••"
                                    )}
                                    <button className="ml-2 text-gray-500" onClick={() => copyToClipboard(item.password)}><FiCopy /></button>
                                    {item.isEditing ? (
                                        item.passwordVisible ? (
                                            <FiEyeOff className='cursor-pointer ml-2' onClick={() => togglePasswordVisibility(index)} />
                                        ) : (
                                            <FiEye className='cursor-pointer ml-2' onClick={() => togglePasswordVisibility(index)} />
                                        )
                                    ) : (
                                        item.passwordVisible ? (
                                            <FiEyeOff className='cursor-pointer ml-2 ' onClick={() => togglePasswordVisibility(index)} />
                                        ) : (
                                            <FiEye className='cursor-pointer ml-2' onClick={() => togglePasswordVisibility(index)} />
                                        )
                                    )}
                                </td>
                                <td className='py-2 border border-white text-center'>
                                    {item.isEditing ? (
                                        <button className="text-gray-500" onClick={() => saveChanges(index)}><FiSave /></button>
                                    ) : (
                                        <div>
                                            
                                            <button className="text-gray-500" onClick={() => toggleEdit(index)}><FiEdit /></button>
                                            <button className="ml-2 text-gray-500" onClick={() => {/* Add logic for delete action */ }}><FiTrash /></button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default PasswordTable;
