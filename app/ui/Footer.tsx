import BMCButton from "./BMCButton";

const Footer = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-evenly items-center p-4 sm:p-10 text-center">
            <div>&copy; 2024 Wild Turkey Date Decoder, All Rights Reserved</div>
            <div>Website created by <a href="https://johnwheelerdev.com">John Wheeler Dev</a></div>
            <BMCButton />
        </div>
    );
}

export default Footer;