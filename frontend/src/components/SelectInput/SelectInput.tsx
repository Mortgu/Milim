import "./SelectInput.scss";

import {useEffect, useRef, useState} from "react";
import {clickHook} from "../../hooks/click.hook";

import CloseIcon from "@material-ui/icons/Close";

export type SelectOption = {
    label: string
    value: string | number
}

type MultipleSelectProps = {
    multiple: true
    value: SelectOption[]
    onChange: (value: SelectOption[]) => void
}

type SingleSelectProps = {
    multiple?: false
    value?: SelectOption
    onChange: (value: SelectOption | undefined) => void
}

type SelectProps = {
    options: SelectOption[]
} & (SingleSelectProps | MultipleSelectProps)


const SelectInput = ({multiple, value, onChange, options}: SelectProps) => {
    const { useOutsideClick } = clickHook();

    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(0);

    const containerRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useOutsideClick(() => setIsOpen(false));

    const clearOptions = () => {
        // @ts-ignore
        multiple ? onChange([]) : onChange(undefined)
    }

    const selectOption = (option: SelectOption) => {
        if (multiple) {
            if (value.includes(option)) {
                onChange(value.filter(o => o !== option));
            } else {
                onChange([...value, option]);
            }
        } else {
            if (option !== value) { // @ts-ignore
                onChange(option);
            }
        }
    }

    const isOptionSelected = (option: SelectOption) => {
        return multiple ? value.includes(option) : option === value;
    }

    useEffect(() => {
        if (isOpen) setHighlightedIndex(0)
    }, [isOpen]);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.target != containerRef.current) return
            switch (e.code) {
                case "Enter":
                case "Space":
                    setIsOpen(prev => !prev)
                    if (isOpen) selectOption(options[highlightedIndex])
                    break
                case "ArrowUp":
                case "ArrowDown": {
                    if (!isOpen) {
                        setIsOpen(true)
                        break
                    }

                    const newValue = highlightedIndex + (e.code === "ArrowDown" ? 1 : -1)
                    if (newValue >= 0 && newValue < options.length) {
                        setHighlightedIndex(newValue)
                    }
                    break
                }
                case "Escape":
                    setIsOpen(false)
                    break
            }
        }
        containerRef.current?.addEventListener("keydown", handler)

        return () => {
            containerRef.current?.removeEventListener("keydown", handler)
        }
    }, [isOpen, highlightedIndex, options]);

    return (
        <div className="select-input-wrapper">
            <div className="dropdown-wrapper" ref={dropdownRef} onClick={() => setIsOpen(true)}>
                <div className="select-input">
                    <div className="viewport">
                        <div className="value">
                            {multiple ? value.map(v => (
                                <button key={v.value} onClick={e => { e.stopPropagation(); selectOption(v); }} className="option-badge">{v.label} <span className="remove-btn">&times;</span></button>
                            )) : value?.label}
                        </div>
                        <button onClick={e => { e.stopPropagation(); clearOptions(); }} className="clear-btn">
                            <CloseIcon />
                        </button>
                    </div>
                </div>
                <div className="dropdown" data-open={isOpen}>
                    {options.map((option, index) => (
                        <button
                            onClick={e => {
                                e.stopPropagation();
                                selectOption(option);
                                setIsOpen(false)
                            }}
                            onMouseEnter={() => setHighlightedIndex(index)}
                            key={option.value}
                            className={`option dropdown-button ${isOptionSelected(option) && "selected"} ${index === highlightedIndex && "highlighted"}`}> {option.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SelectInput;