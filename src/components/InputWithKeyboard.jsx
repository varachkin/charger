import React, {useState, useRef, useEffect} from "react";
import ReactDOM from "react-dom";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import {TextField} from "@mui/material";
// import {FaEye, FaEyeSlash} from "react-icons/fa";

export const InputWithKeyboard = ({
                                      id = ['input_without_id'],
                                      placeholder,
                                      type = 'text',
                                      handleSubmit = null,
                                      getValue = null,
                                      className = '',
                                      defaultValue = ''
                                  }) => {
    const [layoutName, setLayoutName] = useState("ip");
    const [layoutType, setLayoutType] = useState(type === 'password' ? 'text' : type);
    const [inputName, setInputName] = useState();
    const [inputType, setInputType] = useState(type === 'numbers' ? 'number' : type)
    const [input, setInput] = useState({});
    const [keyboardOpen, setKeyboardOpen] = useState(false);
    const inputRef = useRef(null)
    const keyboardRef = useRef(null);
    const keyboardContainerRef = useRef(null);

    const customDisplay = {
        "{bksp}": "⌫",
        "{change}": "+/-",
        "{clear}": "C",
        "{dot}": '.',
        "{shift}": '⇧',
        "{enter}": '↲',
        "{space}": ' ',
        "{tab}": 'Tab',
        "{lock}": 'Caps',
        "{123}": '123',
        "{hide}": '▼',
        "{at}" : '@'
    };

    const customLayout = {
        text: [
            'q w e r t y u i o p',
            'a s d f g h j k l',
            '{shift} z x c v b n m {bksp}',
            '{123} {at} {space} {dot} {hide}'
        ],
        shift: [
            'Q W E R T Y U I O P',
            'A S D F G H J K L',
            '{shift} Z X C V B N M {bksp}',
            '{123} {at} {space} {dot} {hide}'
        ],
        symbols: [
            "[ ] { } # % ^ * + =",
            "_ \\ | ~ < > € £ ¥ ·",
            "{abc} {numbers} . , ? ! ' {bksp}",
            "{space}"
        ],
        number: ["1 2 3", "4 5 6", "7 8 9", "{bksp} 0 {enter}"]
    };


    const onChangeAll = (inputObj) => {
        setInput(inputObj);
        if(getValue){
            getValue({[id]: inputObj[id]})
        }
    };

    const onKeyPress = (button, event) => {
        if (button === "{shift}") handleShift();
        if (button === "{hide}") {
            setKeyboardOpen(false);
            inputRef.current.blur()
        };
        if (button === "{clear}") clearScreen();
        if (button === "{enter}") submit(event);
        if (button === "{change}" && keyboardRef?.current?.getInput(inputName) && keyboardRef?.current?.getInput(inputName) !== '-.') {
            const newValue = `${(parseFloat(keyboardRef?.current?.getInput(inputName)) * (-1))}`
            keyboardRef.current.setInput(newValue)

        }
        if (button === "{at}")  keyboardRef.current.setInput(keyboardRef?.current?.getInput(inputName) + '@')
        if (button === "{dot}")  keyboardRef.current.setInput(keyboardRef?.current?.getInput(inputName) + '.')


            // if (!keyboard?.current?.getInput(inputName)) {
            //     const newVal = '0' + '.'
            //     keyboard.current.setInput(newVal)
            // } else if (!keyboard?.current?.getInput(inputName).includes('.')) {
            //     keyboard.current.setInput(keyboard?.current?.getInput(inputName) + '.')
            // } else {
            //     keyboard.current.setInput(keyboard?.current?.getInput(inputName))
            // }
            // keyboard.current.setCaretPosition(keyboard?.current?.getInput(inputName).length)

        keyboardRef.current.setCaretPosition(keyboardRef?.current?.getInput(inputName).length)
    };

    const submit = (event) => {
        event.stopPropagation();
        event.preventDefault()
        inputRef.current.blur()
        if (handleSubmit) handleSubmit();
        setTimeout(()=> setKeyboardOpen(false), 0)
    }

    const handleShift = () => {
        setLayoutType((prevLayout) =>
            prevLayout === "text" ? "shift" : "text"
        );
    };

    const onChangeInput = (event) => {
        const inputVal = event.target.value;
        const updatedInputObj = {
            ...input,
            [inputName]: inputVal,
        };

        setInput(updatedInputObj);

        if (keyboardRef.current) {
            keyboardRef.current.setInput(inputVal);
        }
    };

    const setActiveInput = (inputName) => {
        setInputName(inputName);
        setKeyboardOpen(true)
    };

    const clearInput = () => {
        const updatedInput = {...input};
        updatedInput[inputName] = "";
        if (keyboardRef) {
            keyboardRef.current.clearInput(inputName)
        }
        setInput(updatedInput);
    };

    const clearScreen = () => {
        clearInput();
    };


    const handleChangeInputType = () => {
        inputType === 'password' ? setInputType('text') : setInputType('password')
    }

    useEffect(() => {
        if (defaultValue) {
            const updatedInputObj = {
                ...input,
                [id]: defaultValue.toString(),
            };
            setInput(updatedInputObj);
        }
        const handleOutsideClick = (event) => {
            console.log(event.currentTarget)
            const isClickInsideKeyboard =
                keyboardContainerRef.current &&
                keyboardContainerRef.current.contains(event.target);
            if (!isClickInsideKeyboard) {
                setKeyboardOpen(false);
                inputRef.current.blur()
            }
        };
        document
            .getElementById("root")
            .addEventListener("click", handleOutsideClick);

        return () => {
            document
                .getElementById("root")
                .removeEventListener("click", handleOutsideClick);
        };

    }, []);
    useEffect(() => {
        const keyboardValues = {};
        [id].forEach((id) => {
            keyboardValues[id] = input[id] || ''
        })
        if(getValue){
            getValue({[`${id}`]: input[id]})
        }
    }, [input])

    useEffect(() => {
        if (keyboardRef.current && keyboardOpen) {
            keyboardRef.current.setInput(defaultValue.toString());
        }
    }, [inputName])

    return (
        <div ref={keyboardContainerRef} className="input-wrapper" >

            {[id].map((id) => {
                return (
                    <label style={{position: 'relative'}}>
                        <TextField
                            label={placeholder}
                            variant="outlined"
                            className={`keyboard-input ${className}`}
                            ref={inputRef}
                            key={`${id}`}
                            onClick={() => setActiveInput(`${id}`)}
                            value={input[`${id}`] || ""}
                            // placeholder={placeholder || id}
                            onChange={(e) => onChangeInput(e)}
                            type={inputType}
                        />
                        {type === 'password' && <span
                            onTouchStart={handleChangeInputType}
                            onTouchEnd={handleChangeInputType}
                        >
                            {inputType === 'password' ? <FaEye/> : <FaEyeSlash/>}
                        </span>}
                    </label>
                )
            })}
            {ReactDOM.createPortal(
                <div className={`modal-keyboard-container ${!keyboardOpen ? 'hide' : 'show'}`}>
                    <div className='modal-keyboard-container-content'>
                        <div className={`${type === 'number' ? 'numbers-wrapper' : 'w-100'} keyboard-wrapper`}>
                            <div className={`keyboardContainer`}>
                                <Keyboard
                                    keyboardRef={r => keyboardRef.current = r}
                                    inputName={inputName}
                                    layoutName={layoutName}
                                    onChangeAll={(inputObj) => onChangeAll(inputObj)}
                                    onKeyPress={(button, event) => onKeyPress(button, event)}
                                    preventMouseDownDefault={true}
                                    stopMouseDownPropagation={true}
                                    layout={{
                                        ip: customLayout[layoutType]
                                    }}
                                    display={customDisplay}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                , document.getElementById('root-modal-keyboard'))}
        </div>
    );
};
