// import { Button, CircularProgress } from "@mui/material";
 import React, { useContext, useRef, useState } from "react";
// import { checkboxValidation, signUpValidation } from "../../../Utils/validation";
// import { StepOne } from "./stepone";
// import { StepThree } from "./stepthree";
// import { StepTwo } from "./steptwo";
// import "./accountCreation.scss";
// import { AccountCreationData, User } from "../../../Interfaces/userInterface";
// import { MessageModel } from "../../index";
// import { projectData } from "../../../config";
// import { accountCreationService, checkEmailService } from "../../../Services/authServices";
// import { Snackmessages } from "../../../Routes/AppRoutes";

// let initialState: AccountCreationData = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   dateOfBirth: "",
//   phoneNumber: "",
//   password: "",
//   level: "medium",
//   terms_and_condition: false,
//   newsLetterOptIn: false,
//   under_eighteen_year: ""
// };

// const steps = (
//   step: number,
//   handleChange: any,
//   errorMsg: User,
//   userData: AccountCreationData,
//   isLessThenEighteen: boolean,
//   handleLevelFun: any,
// ) => {
//   switch (step) {
//     case 1:
//       return (
//         <StepOne
//           handleChange={handleChange}
//           errorMsg={errorMsg}
//           userData={userData}

//         />
//       );

//     case 2:
//       return <StepTwo
//         handleLevel={handleLevelFun}
//         level={userData.level}
//       />;

//     case 3:
//       return <StepThree
//         isLessThenEighteen={isLessThenEighteen}
//         handleChange={handleChange}
//         userData={userData}
//         errorMsg={errorMsg}
//       />;
//   }
// };

interface IProps {
  screenStep: number;
  setScreenStep: any;
  setModelName: any;
  handleCloseModel: any;
}

 export const AccountCreation: React.FC<IProps> = ({ screenStep, setScreenStep, setModelName, handleCloseModel }) => {
//   const createAccRef = useRef(null)
//   const [userData, setUserData] = useState<AccountCreationData>(initialState);
//   const [errorMsg, setErrorMsg] = useState<User>({});

//   const [openMessageModel, setOpenMessageModel] = useState(false);
//   const [isLessThenEighteen, setIsLessThenEighteen] = useState<boolean>(false);
//   const [isLoading, setIsLoading] = useState(false)

//   const handleOpenMessageModel = () => setOpenMessageModel(true);
//   const handleCloseMessageModael = () => setOpenMessageModel(false);

//   const { snackbarShowMessage } = useContext(Snackmessages)

//   const handleModelButtonClick = () => {
//     handleCloseMessageModael()
//     setScreenStep(screenStep + 1);
//   }

//   const handleNext = async () => {
//     try {
//       if (screenStep == 1) {
//         const { errors, isValid } = signUpValidation(userData);
//         setErrorMsg(errors);

//         if (!isValid) return;
//         setIsLoading(true)

//         const checkEmailData: any = await checkEmailService(userData.email)
//         setIsLoading(false)

//         if (checkEmailData.data.result.message === `${userData.email} has an existing account.`) {
//           setErrorMsg({ ...errorMsg, ["email"]: "This email already exist" })
//           return
//         }

//         if (userData.dateOfBirth) {
//           let age: any =
//             new Date(
//               new Date().valueOf() - new Date(userData.dateOfBirth).valueOf()
//             ).getFullYear() - 1970;

//           if (age < 18) {
//             handleOpenMessageModel();
//             setIsLessThenEighteen(true);
//           } else {
//             setScreenStep(screenStep + 1);
//             setIsLessThenEighteen(false)
//           }
//         }
//       } else if (screenStep === 2) {
//         setScreenStep(screenStep + 1);
//       } else {
//         const { error, isValid } = checkboxValidation(userData);

//         setErrorMsg(error)
//         if (!isValid) return
//         setIsLoading(true)


//         let payload: AccountCreationData = {}
//         for (let key in userData) {
//           if (key === "terms_and_condition") payload = { ...payload, ["termsAcceptedDate"]: new Date() }
//           else if (key !== "level" &&
//             key !== "under_eighteen_year"
//           ) {
//             payload = { ...payload, [key]: userData[key as keyof AccountCreationData] }
//           }
//         }
//         payload['venueId'] = projectData.venueId

//         const response: any = await accountCreationService(payload)
//         if (response.status === 201) {
//           setIsLoading(false)
//           // setItemLocalStorage("playerId", response.data.result.playerId)
//           snackbarShowMessage("player Signup successfull", "success");
//           setModelName("Back To Login");
//         } else {
//           snackbarShowMessage("Unable to signup player", "error");
//           setIsLoading(false)
//         }
//       }

//     } catch (err) {
//       console.log(err)
//     }
//   };

//   let handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     let { name, value, checked, type } = e.target;
//     let newData = { [name]: (type === "checkbox") ? checked : value };

//     setUserData({
//       ...userData,
//       [name]: (type === "checkbox") ? checked : value
//     })
//     const { errors } = signUpValidation(newData);
//     const { error } = checkboxValidation(newData)
//     setErrorMsg({
//       ...errorMsg,
//       ...errors,
//       ...error
//     });
//   };

//   let handleLevelFun = (item: any) => {
//     setUserData({
//       ...userData,
//       level: item,
//     });
//   }

   return (
       <>Account creation</>
//     <>

//       {
//         openMessageModel &&
//         <MessageModel
//           open={openMessageModel}
//           handleClose={handleCloseMessageModael}
//           text="You are under 18 years you need guardian permission"
//           reference={createAccRef}
//           buttonText="OK"
//           onButtonClick={handleModelButtonClick}
//         />
//       }

//       <div className="accountCreate position-relative">
//         <div ref={createAccRef} >
//           {steps(screenStep, handleChange, errorMsg, userData, isLessThenEighteen, handleLevelFun)}
//         </div>
//       </div>

//       <div className="button-group mt-4 text-center">
//         <Button
//           variant="outlined"
//           onClick={handleCloseModel}
//           className="btn outline-btn px-4 me-3"
//         >
//           Cancel
//         </Button>

//         <Button
//           variant="contained"
//           onClick={handleNext}
//           className="btn gradient-btn px-5"
//           disabled={isLoading}
//         >
//           {
//             isLoading
//               ? <><CircularProgress color="inherit" /> loading... </>
//               : screenStep === 3 ? "Submit" : "Next"
//           }
//         </Button>

//       </div>

//     </>
   );
 };
