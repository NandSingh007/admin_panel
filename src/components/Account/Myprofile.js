import React, { useState } from 'react';
import { CContainer, CRow, CCol, CCard } from '@coreui/react';
import '../Account/css/Myprofile.css';
import InputTeg from './InputTeg';
import styless from '../Account/css/Designer.module.css';
import img from '../../assets/images/react.jpg'

const Myprofile = () => {

  const obj = {
    Profile: "Profile Detail",
    Kyc: "Kyc Detail",
    Password: "Password Setting",
    Logout: "Logout"
  };

  // const { cartitem3 } = useSelector((state) => state.add);
  const [activeSectionKey, setActiveSectionKey] = useState(Object.keys(obj)[0]);
  const [mge, setMge] = useState('');

  const [storage, setStorage] = useState({
    Pancard: "",
    Gst: "",
    Shop: "",
    AdharCard: "",
  });

  const [storag2, setstorag2] = useState({
    oldpassword: "",
    newpassword: "",
    confirmpassword: "",
  });


  const [storag4, setstorag4] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
    image: "",
    State: "",
    City: "",
    Pincode: "",
    amount: "",
  });

  const handleImageChange = (e) => {
    const name = e.target.name;
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setstorag4({ ...storag4, [name]: reader.result });
      setMge(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setstorag4({ ...storag4, [name]: value });
  };
  const handleInput1 = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setStorage({ ...storage, [name]: value });
  };

  const handleInput2 = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setstorag2({ ...storag2, [name]: value });
  };

  function submit1() {
    console.log(storage)
    // alert("please fill the form");
  }

  function submit2() {
    console.log(storag2)
  }
  const submit4 = event => {
    event.preventDefault()
    console.log(storag4)
    // setActiveSectionKey(Object.keys(obj)[1]);
    // alert("please fill the form");
  }

  const Profile = (
    <div className="row">
      <h2 className={styless.profile_title_heading}>Personal Information</h2>
      <div className='col-md-12'>
        {mge ? <div className={styless.mg}><img src={mge} alt="uploadedimage" width="130px" /></div> : <div className={styless.mg}><img src={img} alt="SelectImage" /></div>}
        <InputTeg
          type='file'
          name="image"
          onChange={handleImageChange}
        />
      </div>
      <div className='col-md-12'>
        {/* name input */}
        <label className={styless.lb}>full name</label>
        <InputTeg
          placeholder="Enter Your Name"
          name="name"
          value={storag4.name}         // defult name
          onChange={handleInput}        //  onchange predefined function "HandelIput"
        />
      </div>
      <div className="col-md-12">
        <div className="row">
          <div className='col-md-6'>
            {/* email input */}
            <label className={styless.lb}>Email</label>
            <InputTeg
              name="email"
              placeholder="Enter Your Email"
              value={storag4.email}          // defult email
              onChange={handleInput}          //  onchange predefined function "HandelIput"
            />
          </div>
          <div className='col-md-6'>
            {/* number input */}
            <label className={styless.lb}>Number</label>
            <InputTeg
              placeholder="Enter Your number"
              name="number"
              value={storag4.number}           // defult number
              onChange={handleInput}           //  onchange predefined function "HandelIput"
            />
          </div>
        </div>
      </div>
      <div className='col-md-12'>
        <div className='row'>
          <div className='col-md-6'>
            <label className={styless.lb}>State</label>
            {/* linkdin input */}
            <InputTeg
              type="text"
              placeholder="Your State"
              name="State"
              value={storag4.State}          // defult inkdin
              onChange={handleInput}           //  onchange predefined function "HandelIput"
            />
          </div>
          <div className='col-md-6'>
            {/* github input */}
            <label className={styless.lb}>City</label>
            <InputTeg
              type="text"
              name="City"
              value={storag4.City}
              onChange={handleInput}
              placeholder="Your City"
            />
          </div>
        </div>
      </div>
      <div className='col-md-12'>
        <div className='row'>
          <div className='col-md-6'>
            <label className={styless.lb}>Address</label>
            {/* linkdin input */}
            <InputTeg
              placeholder="Enter Your Address"
              name="address"
              value={storag4.address}           // defult address
              onChange={handleInput}           //  onchange predefined function "HandelIput"
            />
          </div>
          <div className='col-md-6'>
            {/* github input */}
            <label className={styless.lb}>Pincode</label>
            <InputTeg
              type="text"
              name="Pincode"
              value={storag4.Pincode}
              onChange={handleInput}
              placeholder="Your Pincode"
            />
          </div>
        </div>
      </div>

      <div className="col-md-12">
        {/* portfolio input */}
        <label className={styless.lb}>Locked Amount</label>
        <InputTeg
          type="number"
          placeholder="Locked Amount"
          name="amount"
          value={storag4.amount}        // defult portfolio
          onChange={handleInput}           //  onchange predefined function "HandelIput"
        />
      </div>
      <div className='row btn_group'>
        <button onClick={submit4} className={styless.btn1} >UpdateProfile</button>
      </div>
    </div>
  )
  // personal information end
  // Kycrmation part start

  const Kyc = (
    <div className="row">
      <h2 className={styless.profile_title_heading}>Kyc Details</h2>
      <div className='col-md-12'>
        <div className='row'>
          <div className='col-md-6'>
            <label className={styless.lb}>Shop name</label>
            {/* Pancard input */}
            <InputTeg
              type="text"
              name="Shop"
              value={storage.Shop}      // defult Pancard
              onChange={handleInput1}           //  onchange predefined function "HandelIput1"
              placeholder="Enter Shop details" />
          </div>
          <div className='col-md-6'>
            {/* title_personal input */}
            <label className={styless.lb}>Gst Details</label>
            <InputTeg
              name="Gst"
              type="text"
              value={storage.Gst}         // defult Gst
              onChange={handleInput1}           //  onchange predefined function "HandelIput1"
              placeholder="Enter Gst Details" />
          </div>
        </div>
      </div>
      <div className='col-md-12'>
        <div className='row'>
          <div className='col-md-6'>
            <label className={styless.lb}>Pancard Details</label>
            {/* Pancard input */}
            <InputTeg
              type="text"
              name="Pancard"
              value={storage.Pancard}      // defult Pancard
              onChange={handleInput1}           //  onchange predefined function "HandelIput1"
              placeholder="Enter start date of work" />
          </div>
          <div className='col-md-6'>
            {/* title_personal input */}
            <label className={styless.lb}>AdharCard Number</label>
            <InputTeg
              name="AdharCard"
              type="text"
              value={storage.AdharCard}         // defult Gst
              onChange={handleInput1}           //  onchange predefined function "HandelIput1"
              placeholder="Enter AdharCard Number" />
          </div>
        </div>
      </div>
      <div className='row btn_group'>
        <button onClick={submit1} className={styless.btn1} >UpdateKyc</button>
      </div>
    </div>
  )
  // Kycrmation part end

  // oldpassword part starts
  const Password = (
    <div className='row'>
      <h2 className={styless.profile_title_heading}>Password</h2>
      <div className='col-md-12'>
        {/* oldpassword input */}
        <label className={styless.lb}>Old Password</label>
        <InputTeg
          name="oldpassword"
          type="password"
          value={storag2.oldpassword}        // defult oldpassword
          onChange={handleInput2}          //  onchange predefined function "HandelIput2"
          placeholder="Enter old password"
        />
      </div>
      <div className='col-md-12'>
        {/* newpassword input */}
        <label className={styless.lb}>New Paswword</label>
        <InputTeg
          name="newpassword"
          type="password"
          value={storag2.newpassword}      // defult newpassword
          onChange={handleInput2}      //  onchange predefined function "HandelIput2"
          placeholder="Enter New Paswword"
        />
      </div>
      <div className='col-md-12'>
        {/* confirmpassword input */}
        <label className={styless.lb}>Confirmed Password</label>
        <InputTeg
          name="confirmpassword"
          type="password"
          value={storag2.confirmpassword}      // defult confirmpassword
          onChange={handleInput2}      //  onchange predefined function "HandelIput2"
          placeholder="Enter Confirmed Password"
        />
      </div>
      <div className='row btn_group'>
        <button className={styless.btn1} onClick={submit2} >UpdatePassword</button>
      </div>
    </div>
  )
  // oldpassword part end
  //Logout part start
  const Logout = (
    <div className='row'>
      <h2 className={styless.profile_title_heading}>Logout</h2>
    </div>
  )


  const generateBody = () => {
    switch (obj[activeSectionKey]) {
      case obj.Profile: return Profile;
      case obj.Kyc: return Kyc;
      case obj.Password: return Password;
      case obj.Logout: return Logout;
      default: return null;
    }
  };



  return (
    <>
      <CContainer>
        <CRow>
          <CCol xs={12} md={3}>
            <CCard >
              <ul className={styless.unorder_list}>
                {Object.keys(obj)?.map((item) => (
                  <li
                    className={`${styless.section} ${activeSectionKey === item ? styless.activee : ""}`}
                    key={item}
                    onClick={() => setActiveSectionKey(item)}
                  >
                    {obj[item]}
                  </li>
                ))}
              </ul>
            </CCard>
          </CCol>
          <CCol xs={12} md={9} >
            <CCard>
              {generateBody()}
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </>
  );
};

export default Myprofile;
