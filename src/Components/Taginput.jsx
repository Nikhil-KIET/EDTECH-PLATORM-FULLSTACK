import React, { useState } from "react";

export default function TagInput() {
    const [tags, setTags] = useState([]);
    const [inputValue, setInputValue] = useState("");

    // Add a tag
    const addTag = () => {
        if (inputValue.trim() && !tags.includes(inputValue)) {
            setTags([...tags, inputValue.trim()]);
            setInputValue("");
        }
    };

    // Remove a tag
    const removeTag = (tagToRemove) => {
        setTags(tags.filter((tag) => tag !== tagToRemove));
    };

    // Handle input key press (Enter to add tag)
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            addTag();
        }
    };

    return (
        <div className="space-y-1"  >
            <label htmlFor="tag">Tags</label>
            <div >
                <div className=" flex gap-2 flex-wrap">
                {tags.map((tag, index) => (
                    <div className=" bg-yellow-300 rounded-md mb-2  " key={index} >
                        {tag}
                        <span className=" text-pink-600 cursor-pointer pl-2 text-lg font-medium  " onClick={() => removeTag(tag)}>
                            &times;
                        </span>
                    </div>
                ))}
                </div>
                <input style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                    type="text"
                    name="tag"
                    id="tag"
                    className="w-full rounded-[0.5rem] bg-richblack-700 p-[10px] text-richblack-5"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Add a tag"

                />
            </div>

        </div>
    );
}

// Inline styles for simplicity
