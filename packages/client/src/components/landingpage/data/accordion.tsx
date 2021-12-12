interface Accordion {
    id: number;
    question: string;
    answer: string;
}

export const faq: Accordion[] = [
    {   
        id: 0,
        question: "What’s an NFT?",
        answer:
            "An NFT stands for 'Non-fungible token' and is a fancy way of saying it’s a unique, one of a kind digital item that users can buy, own, and trade. Some NFTs main function are to be digital art and look cool, some offer additional utility like exclusive access to websites or participation in an event, think of it like a rare piece of art that can also act as a 'members' card.",
    },
    {           
        id: 1,
        question: "What is Metamask?",
        answer:
           "Metamask is a crypto wallet that can store your Ethereum, and is needed to purchase and mint a Cool Cat. Having a wallet gives you an Ethereum address (i.e. 0xABCD….1234), this is where your NFT will be stored. Learn more about Metamask and how easy it is to use over here! (https://metamask.io/)",
    },
    {   
        id: 2,
        question: "Where does my NFT go after I purchase a Stoned Monkey?",
        answer:
            "Metamask is a crypto wallet that can store your Ethereum, and is needed to purchase and mint a Cool Cat. Having a wallet gives you an Ethereum address (i.e. 0xABCD….1234), this is where your NFT will be stored. Learn more about Metamask and how easy it is to use over here! (https://metamask.io/)",
    },
    {   
        id: 3,
        question: "Will there be a presale?",
        answer:
            "November. Date TBA",
    },
    {   
        id: 4,
        question: "What can I do with my Stoned Monkey?",
        answer: "TBA",
    },
    {   
        id: 5,
        question: "Do I own the Stoned Monkey after minting it?",
        answer: "Yes, Opensea.io ",
    }
];