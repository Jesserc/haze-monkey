import { NextPage } from "next";
import React, { useState } from "react"
import { faq } from "../data/accordion";
import styles from "../../../styles/local/components/faq.module.css"

const Accordion: NextPage = ({}) => {
    const [isActive, setActive] = useState<boolean>(false);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    
    const FAQ = faq.map((item, i )=> {
        const handleClick: () => void = () => {
            setActive(!isActive)
            i === item.id ? setActiveIndex(i) : null;
            
        }
        return(
            <article key={item.id}>
                <div className="flex justify-between mb-12">
                    <h2 className="w-3/4" onClick = {handleClick} >{item.question}</h2>
                    <button onClick = {handleClick}>
                        <img 
                            src="images/faq/extend.svg" 
                            alt="collapse button" 
                        />
                    </button> 
                </div>
                {(activeIndex === item.id && isActive  ) &&  <p className="mb-14">{item.answer}</p>}
                <div className={["mb-14", styles.underline].join(" ")}></div>
            </article>
        )
    })

    return (
        <>
            {FAQ}
        </>
    );
};


export default Accordion;
