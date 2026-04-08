import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import SelectField from '../components/SelectField'
import MultiSelect from '../components/MultiSelect'

const PROFILE_FOR_OPTIONS = ['Son', 'Daughter', 'Brother', 'Sister', 'Relative']
const HEIGHT_OPTIONS = ["4'6\" FT", "4'8\" FT", "4'10\" FT", "5'0\" FT", "5'2\" FT", "5'4\" FT", "5'6\" FT", "5'8\" FT", "5'10\" FT", "6'0\" FT", "6'2\" FT"]
const MARITAL_OPTIONS = ['Never Married', 'Divorced', 'Widowed', 'Awaiting Divorce']
const LOCATION_OPTIONS = ['Hyderabad', 'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Pune', 'Kolkata', 'Ahmedabad']
const EDUCATION_OPTIONS = ['10th', '12th', 'Diploma', 'Bachelor\'s', 'MBBS', 'B.Tech', 'B.Com', 'BA', 'Master\'s', 'MBA', 'PhD']
const JOB_OPTIONS = ['Student', 'Doctor MD / MS', 'Engineer', 'Business Owner', 'Software Developer', 'Teacher', 'Banker', 'Government Employee', 'Other']
const INCOME_OPTIONS = ['Below 2 Lakh', '2 Lakh to 5 Lakh', '5 Lakh to 10 Lakh', 'INR 10 Lakh to 15 Lakh', '15 Lakh to 25 Lakh', '25 Lakh to 50 Lakh', 'Above 50 Lakh']
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export default function ProfileForm() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    profileFor: [],
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    dobDay: '',
    dobMonth: '',
    dobYear: '',
    height: '',
    maritalStatus: '',
    location: '',
    education: '',
    jobTitle: '',
    annualIncome: '',
  })
  const [errors, setErrors] = useState({})

  const set = (key, val) => {
    setForm(f => ({ ...f, [key]: val }))
    if (errors[key]) setErrors(e => ({ ...e, [key]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!form.profileFor.length) e.profileFor = 'Please select who you are creating profile for'
    if (!form.firstName.trim()) e.firstName = 'First name is required'
    if (!form.lastName.trim()) e.lastName = 'Last name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address'
    if (!form.mobile.trim()) e.mobile = 'Mobile number is required'
    else if (!/^\d{10}$/.test(form.mobile)) e.mobile = 'Enter a valid 10-digit number'
    if (!form.dobDay) e.dobDay = 'Day required'
    if (!form.dobMonth) e.dobMonth = 'Month required'
    if (!form.dobYear) e.dobYear = 'Year required'
    else if (form.dobYear.length !== 4 || isNaN(form.dobYear) || Number(form.dobYear) < 1940 || Number(form.dobYear) > 2006) e.dobYear = 'Enter valid year'
    if (!form.height) e.height = 'Height is required'
    if (!form.maritalStatus) e.maritalStatus = 'Marital status is required'
    if (!form.location) e.location = 'Location is required'
    if (!form.education) e.education = 'Education is required'
    if (!form.jobTitle) e.jobTitle = 'Job title is required'
    if (!form.annualIncome) e.annualIncome = 'Annual income is required'
    return e
  }

  const handleSubmit = () => {
    const e = validate()
    if (Object.keys(e).length > 0) {
      setErrors(e)
      const firstErrKey = Object.keys(e)[0]
      const el = document.querySelector(`[data-field="${firstErrKey}"]`)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }
    // Save name for welcome screen
    localStorage.setItem('userName', `${form.firstName} ${form.lastName}`)
    navigate('/welcome')
  }

  const days = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, '0'))

  return (
    <div className="page">
      <div style={{ padding: '24px 24px 16px', display: 'flex', justifyContent: 'center' }}>
        <Logo size="sm" />
      </div>

      <div className="form-section">
        <h1 className="form-title">Let's build your Profile</h1>
        <p className="form-subtitle">*Indicates Mandatory Fields</p>

        {/* Profile For */}
        <div data-field="profileFor">
          <MultiSelect
            label="You're creating profile for*"
            options={PROFILE_FOR_OPTIONS}
            value={form.profileFor}
            onChange={v => set('profileFor', v)}
            error={errors.profileFor}
            placeholder="Select relationship"
          />
        </div>

        {/* Name Row */}
        <div className="field-row">
          <div className="field-group" data-field="firstName">
            <label>First Name*</label>
            <input
              className={`input-field ${errors.firstName ? 'error' : ''}`}
              type="text"
              value={form.firstName}
              onChange={e => set('firstName', e.target.value)}
              placeholder=""
            />
            {errors.firstName && <p className="error-msg">{errors.firstName}</p>}
          </div>
          <div className="field-group" data-field="lastName">
            <label>Last Name*</label>
            <input
              className={`input-field ${errors.lastName ? 'error' : ''}`}
              type="text"
              value={form.lastName}
              onChange={e => set('lastName', e.target.value)}
            />
            {errors.lastName && <p className="error-msg">{errors.lastName}</p>}
          </div>
        </div>

        {/* Email */}
        <div className="field-group" data-field="email">
          <label>Email Address*</label>
          <input
            className={`input-field ${errors.email ? 'error' : ''}`}
            type="email"
            value={form.email}
            onChange={e => set('email', e.target.value)}
          />
          {errors.email && <p className="error-msg">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div className="field-group" data-field="mobile">
          <label>Mobile Number*</label>
          <div className="phone-row">
            <div className="country-code">+91</div>
            <input
              className={`input-field ${errors.mobile ? 'error' : ''}`}
              type="tel"
              value={form.mobile}
              onChange={e => set('mobile', e.target.value.replace(/\D/g, '').slice(0, 10))}
              placeholder=""
            />
          </div>
          <p className="phone-hint">Matches will contact you on this number</p>
          {errors.mobile && <p className="error-msg">{errors.mobile}</p>}
        </div>

        {/* DOB */}
        <div className="field-group">
          <label>Date of Birth*</label>
          <div className="dob-row">
            <div className="dob-field" data-field="dobDay">
              <label>Day</label>
              <div className="select-wrap">
                <select
                  className={`select-field ${errors.dobDay ? 'error' : ''}`}
                  value={form.dobDay}
                  onChange={e => set('dobDay', e.target.value)}
                >
                  <option value=""></option>
                  {days.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
                <span className="select-arrow">▼</span>
              </div>
              {errors.dobDay && <p className="error-msg">{errors.dobDay}</p>}
            </div>
            <div className="dob-field" data-field="dobMonth">
              <label>Month</label>
              <div className="select-wrap">
                <select
                  className={`select-field ${errors.dobMonth ? 'error' : ''}`}
                  value={form.dobMonth}
                  onChange={e => set('dobMonth', e.target.value)}
                >
                  <option value=""></option>
                  {MONTHS.map(m => <option key={m} value={m}>{m}</option>)}
                </select>
                <span className="select-arrow">▼</span>
              </div>
              {errors.dobMonth && <p className="error-msg">{errors.dobMonth}</p>}
            </div>
            <div className="dob-field" data-field="dobYear">
              <label>Year</label>
              <input
                className={`input-field ${errors.dobYear ? 'error' : ''}`}
                type="number"
                value={form.dobYear}
                onChange={e => set('dobYear', e.target.value.slice(0, 4))}
                placeholder="YYYY"
                min="1940"
                max="2006"
              />
              {errors.dobYear && <p className="error-msg">{errors.dobYear}</p>}
            </div>
          </div>
        </div>

        {/* Height */}
        <div data-field="height">
          <SelectField
            label="Height*"
            options={HEIGHT_OPTIONS}
            value={form.height}
            onChange={v => set('height', v)}
            error={errors.height}
           placeholder="4'8&quot; FT"
          />
        </div>

        {/* Marital + Location */}
        <div className="field-row">
          <div data-field="maritalStatus" style={{ flex: 1 }}>
            <SelectField
              label="Marital Status*"
              options={MARITAL_OPTIONS}
              value={form.maritalStatus}
              onChange={v => set('maritalStatus', v)}
              error={errors.maritalStatus}
              placeholder="Never Married"
            />
          </div>
          <div data-field="location" style={{ flex: 1 }}>
            <SelectField
              label="Current Location*"
              options={LOCATION_OPTIONS}
              value={form.location}
              onChange={v => set('location', v)}
              error={errors.location}
              placeholder="Hyderabad"
            />
          </div>
        </div>

        {/* Education + Job */}
        <div className="field-row">
          <div data-field="education" style={{ flex: 1 }}>
            <SelectField
              label="Highest Education*"
              options={EDUCATION_OPTIONS}
              value={form.education}
              onChange={v => set('education', v)}
              error={errors.education}
              placeholder="MBBS"
            />
          </div>
          <div data-field="jobTitle" style={{ flex: 1 }}>
            <SelectField
              label="Job Title*"
              options={JOB_OPTIONS}
              value={form.jobTitle}
              onChange={v => set('jobTitle', v)}
              error={errors.jobTitle}
              placeholder="Doctor"
            />
          </div>
        </div>

        {/* Annual Income */}
        <div data-field="annualIncome">
          <SelectField
            label="Annual Income*"
            options={INCOME_OPTIONS}
            value={form.annualIncome}
            onChange={v => set('annualIncome', v)}
            error={errors.annualIncome}
            placeholder="INR 10 Lakh to 15 Lakh"
          />
        </div>

        <button className="btn-primary" onClick={handleSubmit}>Next</button>
      </div>
    </div>
  )
}
