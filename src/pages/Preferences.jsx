import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import MultiSelect from '../components/MultiSelect'
import RangeSlider from '../components/RangeSlider'

const MARITAL_OPTS = ['Never Married', 'Divorced', 'Widowed', 'Awaiting Divorce']
const MOTHER_TONGUE_OPTS = ['Telugu', 'English', 'Hindi', 'Kannada', 'Malayalam', 'Tamil', 'Ocia', 'Bhojpuri', 'Marathi']
const PHYSICAL_OPTS = ['Normal', 'Athletic', 'Slim', 'Heavy', "Doesn't matter"]
const EATING_OPTS = ['Vegetarian', 'Non-vegetarian', 'Eggetarian', "Doesn't matter"]
const SMOKING_OPTS = ["Doesn't smoke", "Doesn't matter", 'Occasionally', 'Regularly']
const DRINKING_OPTS = ["Doesn't drink", "Doesn't matter", 'Occasionally', 'Socially']
const RELIGION_OPTS = ['Hindu', 'Muslim', 'Christian', 'Sikh', 'Jain', 'Buddhist', 'Parsi', 'Jewish', 'No Religion', 'Any']
const DIVISION_OPTS = ['Any', 'North', 'South', 'East', 'West']
const DENOMINATION_OPTS = ['Any', 'Brahmin', 'Kshatriya', 'Vaishya', 'Shudra', 'Other']
const EDUCATION_OPTS = ["Bachelor's - Engineering", "Bachelor's - Medical", "Master's", "MBA", "PhD", "Diploma", "Any"]
const EMPLOYMENT_OPTS = ["Bachelor's - Engineering", 'Salaried', 'Self-employed', 'Business', 'Government', 'Not working', 'Any']
const OCCUPATION_OPTS = ["Bachelor's - Engineering", 'Engineer', 'Doctor', 'Teacher', 'Business', 'IT Professional', 'Any']
const INCOME_OPTS = ["Bachelor's - Engineering", 'Below 2L', '2L-5L', '5L-10L', '10L-15L', '15L-25L', '25L+', 'Any']
const COUNTRY_OPTS = ['Any', 'India', 'USA', 'UK', 'Canada', 'Australia', 'UAE']
const STATE_OPTS = ['Any', 'Andhra Pradesh', 'Telangana', 'Maharashtra', 'Karnataka', 'Tamil Nadu', 'Kerala']
const CITY_OPTS = ['Any', 'Hyderabad', 'Mumbai', 'Pune', 'Bangalore', 'Chennai']
const CITIZENSHIP_OPTS = ['Any', 'Indian', 'NRI', 'Foreign National']

export default function Preferences() {
  const navigate = useNavigate()
  const [prefs, setPrefs] = useState({
    ageMin: 28, ageMax: 50,
    heightMin: 5.0, heightMax: 6.0,
    maritalStatus: ['Never Married'],
    motherTongue: ['Telugu', 'English'],
    physicalStatus: ['Normal'],
    eatingHabit: ['Non-vegetarian'],
    smokingHabits: ["Doesn't matter"],
    drinkingHabits: ["Doesn't matter"],
    religion: ['Hindu', 'Muslim'],
    division: ['Any'],
    denomination: ['Any'],
    education: ["Bachelor's - Engineering"],
    employmentType: ["Bachelor's - Engineering"],
    occupation: ["Bachelor's - Engineering"],
    annualIncome: ["Bachelor's - Engineering"],
    country: ['Any'],
    state: ['Any'],
    city: ['Any'],
    citizenship: ['Any'],
  })
  const [errors, setErrors] = useState({})

  const set = (key, val) => {
    setPrefs(p => ({ ...p, [key]: val }))
    if (errors[key]) setErrors(e => ({ ...e, [key]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!prefs.maritalStatus.length) e.maritalStatus = 'Required'
    if (!prefs.motherTongue.length) e.motherTongue = 'Required'
    if (!prefs.religion.length) e.religion = 'Required'
    return e
  }

  const handleSave = () => {
    const e = validate()
    if (Object.keys(e).length > 0) {
      setErrors(e)
      return
    }
    alert('Preferences saved! 🎉')
    navigate('/welcome')
  }

  return (
    <div className="page">
      {/* Header */}
      <div style={{ padding: '16px 24px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Logo size="sm" />
        <button className="skip-btn" onClick={() => navigate('/welcome')}>SKIP</button>
      </div>

      <div className="form-section" style={{ paddingTop: 8 }}>
        <h1 className="form-title" style={{ marginBottom: 20 }}>Edit Partner Preference</h1>

        {/* Age Range */}
        <div className="field-group">
          <label>Age <span style={{ fontWeight: 300, color: '#888', fontSize: 11 }}>(From 24 years)</span></label>
          <div style={{ padding: '4px 0 8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: '#444', marginBottom: 8 }}>
              <span style={{ color: '#b8933a', fontWeight: 600 }}>{prefs.ageMin}</span>
              <span style={{ color: '#b8933a', fontWeight: 600 }}>{prefs.ageMax}</span>
            </div>
            <div style={{ position: 'relative', height: 20, display: 'flex', alignItems: 'center' }}>
              <input type="range" className="range-slider" min={24} max={70}
                value={prefs.ageMin}
                onChange={e => { const v = Math.min(Number(e.target.value), prefs.ageMax - 1); set('ageMin', v) }}
                style={{ position: 'absolute', width: '100%', background: `linear-gradient(to right, #ddd 0%, #ddd ${((prefs.ageMin-24)/46)*100}%, #b8933a ${((prefs.ageMin-24)/46)*100}%, #b8933a ${((prefs.ageMax-24)/46)*100}%, #ddd ${((prefs.ageMax-24)/46)*100}%, #ddd 100%)` }}
              />
              <input type="range" className="range-slider" min={24} max={70}
                value={prefs.ageMax}
                onChange={e => { const v = Math.max(Number(e.target.value), prefs.ageMin + 1); set('ageMax', v) }}
                style={{ position: 'absolute', width: '100%', background: 'transparent' }}
              />
            </div>
          </div>
        </div>

        {/* Height Range */}
        <div className="field-group">
          <label>Height <span style={{ fontWeight: 300, color: '#888', fontSize: 11 }}>(From 3.6" Ft.)</span></label>
          <div style={{ padding: '4px 0 8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: '#444', marginBottom: 8 }}>
              <span style={{ color: '#b8933a', fontWeight: 600 }}>{prefs.heightMin.toFixed(1)} Ft</span>
              <span style={{ color: '#b8933a', fontWeight: 600 }}>{prefs.heightMax.toFixed(1)} Ft</span>
            </div>
            <input type="range" className="range-slider" min={36} max={72} step={1}
              value={prefs.heightMin * 10}
              onChange={e => set('heightMin', Number(e.target.value) / 10)}
              style={{ width: '100%', background: `linear-gradient(to right, #ddd 0%, #ddd ${((prefs.heightMin*10-36)/36)*100}%, #b8933a ${((prefs.heightMin*10-36)/36)*100}%, #b8933a ${((prefs.heightMax*10-36)/36)*100}%, #ddd ${((prefs.heightMax*10-36)/36)*100}%, #ddd 100%)` }}
            />
          </div>
        </div>

        {/* All multi-select fields */}
        <MultiSelect label="Marital Status*" options={MARITAL_OPTS} value={prefs.maritalStatus} onChange={v => set('maritalStatus', v)} error={errors.maritalStatus} />
        <MultiSelect label="Mother Tongue*" options={MOTHER_TONGUE_OPTS} value={prefs.motherTongue} onChange={v => set('motherTongue', v)} error={errors.motherTongue} />
        <MultiSelect label="Physical Status*" options={PHYSICAL_OPTS} value={prefs.physicalStatus} onChange={v => set('physicalStatus', v)} />
        <MultiSelect label="Eating Habit*" options={EATING_OPTS} value={prefs.eatingHabit} onChange={v => set('eatingHabit', v)} />
        <MultiSelect label="Smoking Habits*" options={SMOKING_OPTS} value={prefs.smokingHabits} onChange={v => set('smokingHabits', v)} />
        <MultiSelect label="Drinking Habits*" options={DRINKING_OPTS} value={prefs.drinkingHabits} onChange={v => set('drinkingHabits', v)} />
        <MultiSelect label="Religion*" options={RELIGION_OPTS} value={prefs.religion} onChange={v => set('religion', v)} error={errors.religion} />
        <MultiSelect label="Division*" options={DIVISION_OPTS} value={prefs.division} onChange={v => set('division', v)} />
        <MultiSelect label="Denomination*" options={DENOMINATION_OPTS} value={prefs.denomination} onChange={v => set('denomination', v)} />
        <MultiSelect label="Education*" options={EDUCATION_OPTS} value={prefs.education} onChange={v => set('education', v)} />
        <MultiSelect label="Employment Type*" options={EMPLOYMENT_OPTS} value={prefs.employmentType} onChange={v => set('employmentType', v)} />
        <MultiSelect label="Occupation*" options={OCCUPATION_OPTS} value={prefs.occupation} onChange={v => set('occupation', v)} />
        <MultiSelect label="Annual Income*" options={INCOME_OPTS} value={prefs.annualIncome} onChange={v => set('annualIncome', v)} />
        <MultiSelect label="Country living in*" options={COUNTRY_OPTS} value={prefs.country} onChange={v => set('country', v)} />
        <MultiSelect label="State living in*" options={STATE_OPTS} value={prefs.state} onChange={v => set('state', v)} />
        <MultiSelect label="Residing City*" options={CITY_OPTS} value={prefs.city} onChange={v => set('city', v)} />
        <MultiSelect label="Citizenship*" options={CITIZENSHIP_OPTS} value={prefs.citizenship} onChange={v => set('citizenship', v)} />

        {/* Footer links */}
        <div className="footer-links">
          <div>
            <a href="#">Contact Us</a> | <a href="#">Terms &amp; Conditions</a> | <a href="#">Privacy Policy</a> | <a href="#">Be site Online</a>
          </div>
          <div style={{ marginTop: 4, fontSize: 9, color: '#aaa' }}>
            @ Marry Me Community Matchmaking, Trusted safe By Parents<br />
            Passionately created by People Group<br />
            Version v1.0
          </div>
        </div>

        <button className="btn-primary" onClick={handleSave}>Save &amp; Continue</button>
      </div>
    </div>
  )
}
