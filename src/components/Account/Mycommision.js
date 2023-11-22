import React, { useState } from 'react';
import { CContainer, CRow, CCol, CCard, CTableDataCell, CTableHeaderCell, CTable, CTableRow, CTableHead, CTableBody } from '@coreui/react';
import '../Account/css/Myprofile.css';
// import InputTeg from './InputTeg';
import styless from '../Account/css/Designer.module.css';
// import img from '../../assets/images/react.jpg'

const Mycommision = () => {

    const obj = {
        Mobile: "Mobile",
        Dth: "Dth",
        Electricity: "Electricity",
        Pancard: "Pancard",
        Aeps: "Aeps",
        DMT: "Dmt"
    };

    // const { cartitem3 } = useSelector((state) => state.add);
    const [activeSectionKey, setActiveSectionKey] = useState(Object.keys(obj)[0]);
    // const [mge, setMge] = useState('');

    // const [storage, setStorage] = useState({
    //     Pancard: "",
    //     Gst: "",
    //     Shop: "",
    //     AdharCard: "",
    // });

    // const [storag2, setstorag2] = useState({
    //     oldpassword: "",
    //     newpassword: "",
    //     confirmpassword: "",
    // });


    // const [storag4, setstorag4] = useState({
    //     name: "",
    //     email: "",
    //     number: "",
    //     address: "",
    //     image: "",
    //     State: "",
    //     City: "",
    //     Pincode: "",
    //     amount: "",
    // });

    // const handleImageChange = (e) => {
    //     const name = e.target.name;
    //     const file = e.target.files[0];
    //     const reader = new FileReader();

    //     reader.onloadend = () => {
    //         setstorag4({ ...storag4, [name]: reader.result });
    //         setMge(reader.result);
    //     };
    //     if (file) {
    //         reader.readAsDataURL(file);
    //     }
    // };

    // const handleInput = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     setstorag4({ ...storag4, [name]: value });
    // };
    // const handleInput1 = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     setStorage({ ...storage, [name]: value });
    // };

    // const handleInput2 = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     setstorag2({ ...storag2, [name]: value });
    // };

    // function submit1() {
    //     console.log(storage)
    //     // alert("please fill the form");
    // }

    // function submit2() {
    //     console.log(storag2)
    // }
    // const submit4 = event => {
    //     event.preventDefault()
    //     console.log(storag4)
    // setActiveSectionKey(Object.keys(obj)[1]);
    // alert("please fill the form");
    // }

    const Mobile = (
        // <div className="row">
        <>
            <CTable bordered className='table'>
                <CTableHead>
                    <CTableRow>
                        <CTableHeaderCell scope="col">Provider</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Types</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Value</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    <CTableRow >
                        <CTableDataCell>Mark</CTableDataCell>
                        <CTableDataCell>Otto</CTableDataCell>
                        <CTableDataCell>@mdo</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableDataCell>Jacob</CTableDataCell>
                        <CTableDataCell>Thornton</CTableDataCell>
                        <CTableDataCell>@fat</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableDataCell>Jacob</CTableDataCell>
                        <CTableDataCell>Thornton</CTableDataCell>
                        <CTableDataCell>@fat</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                </CTableRow>
                </CTableBody>
            </CTable>
        </>
    )
    // personal information end
    // Kycrmation part start

    const Dth = (
        <CTable bordered className='table'>
            <CTableHead>
                <CTableRow>
                    <CTableHeaderCell scope="col">Provider</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Types</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Value</CTableHeaderCell>
                </CTableRow>
            </CTableHead>
            <CTableBody>
                <CTableRow >
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                </CTableRow>
                <CTableRow >
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                </CTableRow>
                <CTableRow>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                </CTableRow>
                <CTableRow>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                </CTableRow>
                <CTableRow>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                </CTableRow>
            </CTableBody>
        </CTable>
    )
    // Kycrmation part end

    // oldpassword part starts
    const Electricity = (
        <CTable bordered className='table'>
            <CTableHead>
                <CTableRow>
                    <CTableHeaderCell scope="col">Provider</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Types</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Value</CTableHeaderCell>
                </CTableRow>
            </CTableHead>
            <CTableBody>
                <CTableRow >
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                </CTableRow>
                <CTableRow>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                </CTableRow>
                <CTableRow>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                </CTableRow>
                <CTableRow >
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                </CTableRow>
            </CTableBody>
        </CTable>
    )
    // oldpassword part end
    //Logout part start
    const Pancard = (
        <CTable bordered className='table'>
            <CTableHead>
                <CTableRow>
                    <CTableHeaderCell scope="col">Provider</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Types</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Value</CTableHeaderCell>
                </CTableRow>
            </CTableHead>
            <CTableBody>
                <CTableRow >
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                </CTableRow>
                <CTableRow>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                </CTableRow>
                <CTableRow>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                </CTableRow>
                <CTableRow>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                </CTableRow>
                <CTableRow >
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                </CTableRow>
            </CTableBody>
        </CTable>
    )

    const Aeps = (
        <CTable bordered className='table'>
            <CTableHead>
                <CTableRow>
                    <CTableHeaderCell scope="col">Provider</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Types</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Value</CTableHeaderCell>
                </CTableRow>
            </CTableHead>
            <CTableBody>
                <CTableRow >
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                </CTableRow>
                <CTableRow>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                </CTableRow>
                <CTableRow>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                </CTableRow>
                <CTableRow>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                </CTableRow>
                <CTableRow >
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                </CTableRow>
                <CTableRow>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                </CTableRow>
            </CTableBody>
        </CTable>
    )

    const Dmt = (
        <CTable bordered className='table'>
            <CTableHead>
                <CTableRow>
                    <CTableHeaderCell scope="col">Provider</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Types</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Value</CTableHeaderCell>
                </CTableRow>
            </CTableHead>
            <CTableBody>
                <CTableRow>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                </CTableRow>
                <CTableRow>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                </CTableRow>
                <CTableRow>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                </CTableRow>
                <CTableRow>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                </CTableRow>
                <CTableRow>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                </CTableRow>
            </CTableBody>
        </CTable>
    )


    const generateBody = () => {
        switch (obj[activeSectionKey]) {
            case obj.Mobile: return Mobile;
            case obj.Dth: return Dth;
            case obj.Electricity: return Electricity;
            case obj.Pancard: return Pancard;
            case obj.Aeps: return Aeps;
            case obj.DMT: return Dmt;
            default: return null;
        }
    };

    return (
        <>
            <CContainer>
                <CRow>
                    <CCol md={12} >
                        <CCard >
                            <CRow>
                                {Object.keys(obj)?.map((item) => (
                                    <CCol
                                        className={`${styless.section} ${activeSectionKey === item ? styless.activee : ""}`}
                                        key={item}
                                        onClick={() => setActiveSectionKey(item)}
                                    >
                                        {obj[item]}
                                    </CCol>
                                ))}
                            </CRow>
                        </CCard>
                        <CCard>
                            {generateBody()}
                        </CCard>
                    </CCol>
                </CRow>
            </CContainer>
        </>
    );
};

export default Mycommision;
