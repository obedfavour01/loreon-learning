"use client"
import { cn } from '@/lib/utils'
import { Eye } from 'lucide-react'
import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { Input } from './input'

interface InputPasswordProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>((props, ref) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    const togglePassword = () => {
        if (inputRef.current) {
            if (inputRef.current.type === "password") {
                inputRef.current.type = "text";
            } else {
                inputRef.current.type = "password";
            }
        }
    };

    return (
        <div className={cn('flex justify-between items-center px-3 py-2 rounded-md bg-[#f4f6fa]', props.className)}>
            <input
                type="password"
                placeholder={props.placeholder}
                ref={inputRef}
                className='w-full outline-none bg-transparent'
                {...props}
            />
            <Eye onClick={togglePassword} 
                stroke='#586283' 
                size={20}
                className='cursor-pointer ' />
        </div>
    );
});

InputPassword.displayName = 'InputPassword';

export default InputPassword