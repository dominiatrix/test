import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useTranslation} from "react-i18next";
import React from 'react';
import { useState , useEffect } from "react";
import i18next from 'i18next'

function Home() {

    const {i18n, t} = useTranslation();

    const handleLanguageChange = (e) => {
      i18n.changeLanguage(e.target.value)
    }
  
  	useEffect(() => {
      if (localStorage.getItem("i18nextLng")?.length > 2) {
        i18next.changeLanguage("en");
      }
    }, []);

  return (
    <>
     <Container className='tradco' fluid>
      <Row>
        <Col className='text-nowrap ms-5'><i class="bi bi-telephone me-2"></i> 00229 94 94 20 95</Col>    
        <Col></Col>
        <Col className='text-nowrap'>{t('pub')}</Col>      
        <Col> 
        <div class="col-md-3">
    <select onChange={handleLanguageChange} className="form-select-sm custom-select" required>
      <option  value="en">En</option>
      <option value="fr">Fr</option>
    </select>
    </div>
      </Col>
      </Row>
    </Container>
    <div style={{marginInline:'20vw', marginTop:'10vh'}}><nav>
    <div class="nav nav-tabs" id="nav-tab" role="tablist">
      <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
      <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
      <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
      <button class="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false" disabled>Disabled</button>
    </div>
  </nav>
  <div class="tab-content" id="nav-tabContent">
    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">{t('msg')}</div>
    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">{t('butt')}</div>
    <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">{t('cat')}{t('new')}</div>
    <div class="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">...</div>
  </div>
  </div>
  </>
  )
}

export default Home