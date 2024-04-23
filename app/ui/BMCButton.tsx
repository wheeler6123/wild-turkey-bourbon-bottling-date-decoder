import Image from "next/image";

const BMCButton = () => {
    return (
        <a href="https://www.buymeacoffee.com/wheeler6123" target="_blank" rel="noopener noreferrer">
            <Image src="/bmcbuttonblack.png" width={150} height={50} alt="Buy Me a Coffee" />
        </a>
    )
}

export default BMCButton;