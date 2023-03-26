import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import "./password.css";


function PasswordInput() {
    const [password, setPassword] = useState('');
    const [hasUppercase, setHasUppercase] = useState(false);
    const [hasLowercase, setHasLowercase] = useState(false);
    const [hasNumber, setHasNumber] = useState(false);
    const [hasSpecialChar, setHasSpecialChar] = useState(false);
    const [hasEightChar, setHasEightChar] = useState(false);


    function handlePasswordChange(event) {
        const inputPassword = event.target.value;
        setPassword(inputPassword);

        // Check if password meets required conditions
        if (inputPassword.match(/[A-Z]/)) {
            setHasUppercase(true);
        } else {
            setHasUppercase(false);
        }

        if (inputPassword.match(/[a-z]/)) {
            setHasLowercase(true);
        } else {
            setHasLowercase(false);
        }

        if (inputPassword.match(/[0-9]/)) {
            setHasNumber(true);
        } else {
            setHasNumber(false);
        }

        if (inputPassword.match(/[@#$%^&+=]/)) {
            setHasSpecialChar(true);
        } else {
            setHasSpecialChar(false);
        }


        if (inputPassword.length >= 8) {
            setHasEightChar(true);
        } else {
            setHasEightChar(false);
        }
    }

    return (
        <div>
            <Form.Item
                label="Password"
                value={password}
                onChange={handlePasswordChange}
            >
                <Input.Password placeholder="***********" />
            </Form.Item>

            <Form.Item id="passsword-conditions">

                <Checkbox className="greenTick" type="checkbox" checked={hasEightChar} >8 Characters</Checkbox>
                <br />

                <Checkbox className="greenTick" type="checkbox" checked={hasSpecialChar} >1 Special character</Checkbox>

                <br />

                <Checkbox className="greenTick" type="checkbox" checked={hasNumber} >1 number</Checkbox>

                <br />

                <Checkbox className="greenTick" type="checkbox" checked={hasLowercase} >1 Lowercase</Checkbox>
                <br />


                <Checkbox className="greenTick" type="checkbox" checked={hasUppercase} >1 Uppercase</Checkbox>

            </Form.Item>






        </div>
    );
}

export default PasswordInput;