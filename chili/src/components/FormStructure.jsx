import logo from './logga/ChiliLogo.svg';
import { Link } from 'react-router-dom';

function FormStructure ({formData, error, touched, handleChange, handleBlur,  isFormValid}){


	return(
		<div>
			<div className="head-menu">
  				<Link to="/">
    			<img src={logo} alt="Logotyp" className="logo" />
  				</Link>
  				<h1>Work log in</h1>
			</div>
		<section>
			
		<form>
			<div className="input-field username">
				<label>User Name:</label>
				<input
				type="text"
				value={formData.username}
				name="username"
				onChange={handleChange}
				onBlur={handleBlur}
				/>
				<small className="error">
  				{touched.username && error.username ? error.username : "\u00A0"}
					</small>
			</div>

			<div className="input-field email">
				<label>Email:</label>
				<input
				type="text" 
				value={formData.email} 
				name="email" 
				onChange={handleChange}
				onBlur={handleBlur}
				/><small className="error">
				{touched.email && error.email ? error.email : "\u00A0"}
			  </small>
				
			</div>
				
			

			<div className="input-field password">
				<label>Password:</label>
				<input
				type="password" 
				value={formData.password} 
				name="password" 
				onChange={handleChange}
				onBlur={handleBlur}
				/>
				<small className="error">
  				{touched.password && error.password ? error.password : "\u00A0"}
				</small>
				  
				
			</div>

			<button type="submit" disabled={!isFormValid()}>
				Log In
			</button>
		</form>
		<div className="text-box">
			<h1>Welcome to the Work Portal</h1>
			<p>Log in to access your work account</p>
		</div>
		</section>
		</div>
	)
}

export default FormStructure