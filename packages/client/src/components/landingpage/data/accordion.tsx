interface Accordion {
    id: number;
    question: string;
    answer: string;
}

export const faq: Accordion[] = [
    {   
        id: 0,
        question: "What is the mint price?",
        answer:
            "0.08 ETH",
    },
    {   
        id: 1,
        question: "What is the mint date?",
        answer:
            "12th Febuary 2022 by 7:20pm UTC",
    },
    {   
        id: 2,
        question: "What Is the Total number available to mint?",
        answer:
            "4200",
    },
    {           
        id: 3,
        question: "On what chain will Haze Monkey mint on?",
        answer:
           "Etherium blockchain.",
    },
    {   
        id: 4,
        question: "Will holders get IP rights for their NFTs?",
        answer:
            "Yes, holders of Haze Monkey will get IP rights of their NFTs",
    },
    {   
        id: 5,
        question: "Does this project have any utilities? ",
        answer:
            "We have a well drafted roadmap and holders rewards section that describes the utilities this project has to offer. You can find more information regarding that on the website.",
    },
    {   
        id: 6,
        question: "How do I get whitelisted?",
        answer: "Join our discord server and follow us of all social media platforms.",
    }
];