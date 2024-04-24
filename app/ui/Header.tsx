import Link from "next/link"

const Header: React.FC = () => {
    return (
        <div className="flex justify-center my-4 font-semibold">
            <div>
                <Link href="/about">How It Works</Link>
            </div>
        </div>
    )
}

export default Header;