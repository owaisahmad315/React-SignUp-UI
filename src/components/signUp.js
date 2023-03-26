import React from 'react';
import { useState } from 'react';
import "./signUp.css"
import MyForm3 from "./signUp3"
import PasswordInput from "./password"
import mylogo from "../assets/images/Logo.png";

import { Button, Form, Input, Tabs, message, Steps, theme, Checkbox } from 'antd';



// code for the tabs /////////////////////////////////////////////////////////////
const onChange = (key) => {
  console.log(key);
};

const items = [
  {
    key: '1',
    label: `Login`,

  },
  {
    key: '2',
    label: `Sign Up`,

  }
];

// code for the step component /////////////////////////////////////////////////////////////
const steps = [
  {
    // title: 'First',
    content: 'First-content',
  },
  {
    // title: 'Second',
    content: 'Second-content',
  }

];

// code for the sign Up page to hide on next //////////////////////////////////////////////////////////////////////


const SignUp2HideAndShow = () => {


  // // code for the password condtions


  // const [password, setPassword] = useState('');
  // const [hasUppercase, setHasUppercase] = useState(false);
  // const [hasLowercase, setHasLowercase] = useState(false);
  // const [hasNumber, setHasNumber] = useState(false);
  // const [hasSpecialChar, setHasSpecialChar] = useState(false);
  // const [hasEightChar, setHasEightChar] = useState(false);

  // // Check if password meets required conditions

  // const inputPassword = event.target.value;
  // setPassword(inputPassword);

  // if (inputPassword.match(/[A-Z]/)) {
  //   setHasUppercase(true);
  // } else {
  //   setHasUppercase(false);
  // }

  // if (inputPassword.match(/[a-z]/)) {
  //   setHasLowercase(true);
  // } else {
  //   setHasLowercase(false)
  // }

  // if (inputPassword.match(/[0-9]/)) {
  //   setHasNumber(true);
  // } else {
  //   setHasNumber(false);
  // }

  // if (inputPassword.match(/[@#$%^&+=]/)) {
  //   setHasSpecialChar(true);
  // } else {
  //   setHasSpecialChar(false);
  // }

  // if (inputPassword.length >= 8) {
  //   setHasEightChar(true);
  // } else {
  //   setHasEightChar(false);
  // }



  return (
    <MyFormItemGroup prefix={['user']}>
      <MyFormItemGroup prefix={['name']}>
        <MyFormItem labelAlign="right" name="bussinesName" label="Bussines Name">
          <Input placeholder="Please enter your business name" />
        </MyFormItem>
        <MyFormItem name="email" label="Email">
          <Input placeholder="Please enter your email" />
        </MyFormItem>
      </MyFormItemGroup>


      <PasswordInput />

    </MyFormItemGroup>


  )

}


// code for the form input /////////////////////////////////////////////////////////////////////
const MyFormItemContext = React.createContext([]);
function toArr(str) {
  return Array.isArray(str) ? str : [str];
}
const MyFormItemGroup = ({ prefix, children }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);
  return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
};
const MyFormItem = ({ name, ...props }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
  return <Form.Item name={concatName} {...props} />;
};




const SignUp = () => {

  const onFinish = (value) => {
    console.log(value);
  };

  // code for the step component //////////////////////////////////////////////////////////////////////




  // const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  console.log(current)
  const next = () => {
    setCurrent(current + 1);

  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const stepItems = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));


  return (
    <>
      <div className="signUp-container">

        <div className="left-side">
          <image className="logo" src={mylogo} />
          <h1>hello</h1>

        </div>

        <div className="right-side">

          <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
            <Tabs defaultActiveKey="2" items={items} />
            <Steps current={current} items={stepItems} />

            {current < 1 && (
              <SignUp2HideAndShow />)

            }
            {current > 0 && (
              <>
                <MyForm3 />

              </>
            )

            }


            {/* <Button type="primary" htmlType="submit"  >
              Next
            </Button> */}
            <div className={`next-and-back-btn ${current === 0 ? "current-1" : ""}`}>
              {
                current > 0 && (
                  <Button onClick={() => prev()} >
                    Back
                  </Button>
                )
              }
              <Button
                className="next-btn"
                type="primary"
                onClick={() => next()}
              >
                Next
              </Button>
            </div>



            {/* {current > 0 && (
              
            )} */}
          </Form>
        </div>

      </div>

    </>

  )
}

export default SignUp;