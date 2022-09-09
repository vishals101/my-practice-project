// import { Button } from "@mui/material";
 import React, { useState } from "react";
// import {
//   CustomizedModel,
//   AccountCreation,
//   LoginComponent,
//   MembershipCredential,
//   LoadingScreen,
//   GuardianForm
// } from "../../Components";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../css/global.scss';
// import '../../css/global-component.scss';
// import './landingPage.scss';
import landing_image from "../../Assets/images/golf_swing.png";
// import { Bg_logo, Header_logo } from "../../Components/images";
// import { projectData } from '../../config'

 export const LandingPage: React.FC = () => {
//   const [openModel, setOpenModel] = useState(false);
//   const [modelName, setModelName] = useState("Account Creation");
//   const [accountCreationScreenStep, setAccountCreationScreenStep] = useState(1);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleOpenModel = (name: string) => {
//     setModelName(name);
//     setOpenModel(true);
//   };

//   const handleCloseModel = () => {
//     setOpenModel(false);
//     setAccountCreationScreenStep(1);
//   };

//   const handleChildren = () => {
//     switch (modelName) {
//       case "Account Creation":
//         return (
//           <AccountCreation
//             screenStep={accountCreationScreenStep}
//             setScreenStep={setAccountCreationScreenStep}
//             setModelName={setModelName}
//             handleCloseModel={handleCloseModel}
//           />
//         );
//       case "Login To Your Account":
//         return (
//           <LoginComponent
//             setIsLoading={setIsLoading}
//             handleOpenModel={handleOpenModel}
//           />
//         );
//       case "Back To Login":
//         return <div className="text-center">
//           <p className="text-center px-md-5 px-0">A Mail has been sent to your email. <br></br> Make sure to verify your email to activate your account.</p>
//           <p>Email verified?</p>
//           <Button className="gradient-btn" variant="contained"
//             onClick={() => setModelName("Login To Your Account")}
//           >
//             Back to Login
//           </Button>
//         </div>
//       case "Gurardian Consent Form":
//         return <GuardianForm handleCloseModel={handleCloseModel} />
//       default:
//         return (
//           <AccountCreation
//             screenStep={accountCreationScreenStep}
//             setScreenStep={setAccountCreationScreenStep}
//             setModelName={setModelName}
//             handleCloseModel={handleCloseModel}
//           />
//         );
//     }
//   };

//   const handleBack = () => {
//     if (accountCreationScreenStep !== 1)
//       setAccountCreationScreenStep(accountCreationScreenStep - 1);
//   };

   return (
     <>hello</>
//     <>
//       {isLoading ? (
//         <LoadingScreen
//           title={"Welcome Danny 😎"}
//           subtitle={"Prepare yourself for a mind-blowing golfing Experience"}
//           loadingtext={"Please Wait..Loading Screen"}
//         />
//       ) : (
//         <>
//           <div className="container landing-container">
//             <div className="row">
//               <div className="col-lg-12">
//                 <div className="text-start mt-3">
//                   <img src={Header_logo} width="100"></img>
//                 </div>
//               </div>
//             </div>
//             <div className="row align-items-center">
//               <div className="col-lg-5">
//                 <div className="landing-page-content my-4 my-md-5 my-lg-0">
//                   <h1 className="text-start fw-bold">
//                     WELCOME TO {projectData.project_name_uc} PLAYER PORTAL!
//                   </h1>
//                   <p className="text-start">
//                     {projectData.project_name} Golf & Entertainment is your place for a tech-driven
//                     entertainment and golfing experience that is elevating the
//                     golf entertainment industries.
//                   </p>
//                   <div className="button-group text-start">
//                     <Button
//                       variant="contained"
//                       onClick={() => handleOpenModel("Account Creation")}
//                       className="btn gradient-btn me-3"
//                     >
//                       Create Account
//                     </Button>

//                     <Button
//                       variant="outlined"
//                       className="btn secondary-btn px-5"
//                       onClick={() => handleOpenModel("Login To Your Account")}
//                     >
//                       Login
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-7">
//                 <div className="img-container position-relative">
//                   <img src={landing_image} width="90%"></img>
//                   {/* <div className="back text-start position-absolute">
//                     <img src={Bg_logo} width="90%"></img>
//                   </div> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//           {openModel && (
//             <CustomizedModel
//               open={openModel}
//               handleClose={handleCloseModel}
//               title={modelName}
//               handleBack={modelName !== "Account Creation" ? false : handleBack}
//               isClose={modelName !== "Account Creation" ? true : false}
//               stepsText={
//                 modelName !== "Account Creation"
//                   ? ""
//                   : `${accountCreationScreenStep}/3`
//               }
//             >
//               {handleChildren()}
//             </CustomizedModel>
//           )}
//         </>
//       )}
//     </>
   );
 };
