import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "default" | "outline";
};

const Button = ({ className, variant = "default", ...props }: ButtonProps) => {
    return (
        <button
            className={`rounded-xl px-6 py-2 font-medium ${variant === 'outline' ? 'border' : 'bg-blue-600 text-white'}`}
            {...props}
        />
    );
};

export default Button;