interface Accordion {
    id: number;
    question: string;
    answer: string;
}

export const faq: Accordion[] = [
    {   
        id: 0,
        question: "How much is a Haze Monkey NFT and when is the public mint?",
        answer:
            "Information regarding minting is yet to be made public. We will update this answer once we have fixed a date",
    },
    {           
        id: 1,
        question: "On what chain will Haze Monkey mint on?",
        answer:
           "Etherium blockchain.",
    },
    {   
        id: 2,
        question: "Will holders get IP rights for their NFTs?",
        answer:
            "Yes, holders of Haze Monkey will get IP rights of their NFTs",
    },
    {   
        id: 3,
        question: "Does this project have any utilities? ",
        answer:
            "We have a well drafted roadmap and holders rewards section that describes the utilities this project has to offer. You can find more information regarding that on the website.",
    },
    {   
        id: 4,
        question: "How do I get whitelisted?",
        answer: "Join our discord server and follow us of all social media platforms.",
    }
];