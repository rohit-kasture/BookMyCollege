import React, { useRef, useState, useEffect } from 'react';
import "./styles.css";

function Dropdown({ options, id, label, prompt, value, onChange }) {

    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");

    const ref = useRef(null);
    useEffect(() => {
        document.addEventListener("click", close)
        return () => document.removeEventListener("click", close);
    }, []);

    function close(e) {
        /* console.log(e.target)
        console.log(e)
        console.log(ref.current) */
        setOpen(e && e.target === ref.current);
    }

    function filter(options) {
        return options?.filter(option => option[label]?.toLowerCase()?.indexOf(query.toLowerCase()) > -1);
    }

    function displayValue() {
        if (query.length > 0) return query;
        if (value) return value[label];
        return "";
    }
    return (
        <div className="dropdown">
            <div className="control" onClick={() => setOpen((prev) => !prev)}>
                <div className="selected-value">

                    <input type="text"
                        ref={ref}
                        placeholder={value ? value[label] : prompt}
                        onChange={e => {
                            setQuery(e.target.value)
                            onChange(null)
                        }}
                        value={displayValue()}
                        onClick={() => setOpen(prev => !prev)}
                    />
                </div>
                <div className={`arrow ${open ? "open" : null}`} />
            </div>
            <div className={`options ${open ? "open" : null}`} >
                {
                    filter(options).map((option) => (
                        <div key={option[id]}
                            className={`option ${value === option ? "selected" : null}`}
                            onClick={() => {
                                setQuery("")
                                onChange(option);
                                setOpen(false);
                            }}>{option[label]}</div>
                    ))
                }
            </div>
        </div >
    );
}
export default Dropdown;