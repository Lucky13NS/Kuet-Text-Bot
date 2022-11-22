// import React from 'react'
// import { useState } from 'react';

// import HeroSection from '../../src/components/Hero-section/hero-section';
// import Navbar from '../../src/components/Navbar/index';
// import Sidebar from '../../src/components/Sidebar/index';
// import Footer from '../components/Footer/footer';


//   const StudentProfile = () => {
//     const [isOpen, setIsOpen] = useState(false)

//     const toggle = () => {
//         setIsOpen(!isOpen)
//     };

//     return (
//         <>
//             <Sidebar isOpen={isOpen} toggle={toggle} />
//             <Navbar toggle={toggle} />





//             <section class="profile_section">
			
// 			<section class="section_body container-fluid">
				
				
// 				<div class="row justify-content-around py-5">
// 					<div class="col-lg-3 col-md-3 col-sm-12">
// 						<h1 class="student_name">@ {{ $user->user_name }}</h1>
// 					</div>
// 				</div>
// 				<div class="row justify-content-center py-5">
					
// 					<div class="col-lg-3 col-md-3 col-sm-8">
// 						<img src="{{ asset('profile/'.$user->profile_picture) }} " width="350" height="350" class="p-3 bg-dark profile_pic" alt="">
// 					</div>
					
// 				</div>
				
// 			</section>
// 		</section>
// 		<section class="academic_section bg-dark">
// 			<div class="p-5">
// 				<div class="profile_inner_section slide_section my-5 container-fluid">
// 					<div class="container my-2">
// 						<h3 class="text-center pt-5">DASHBOARD</h3>
// 						<div class="row justify-content-center p-3">
// 							<div class="col-lg-8">
// 								<div class="card p-5">
// 									<p class="text-left mb-5">PERSONAL INFORMATION</p>
// 									<div class="user_details p-3">
// 										<table class="table">
// 											<tr>
// 												<th scope="col">User Name :</th>
// 												<td class="ml-5">{{ $user->user_name }}</td>
// 											</tr>
// 											<tr>
// 												<th scope="col">Email :</th>
// 												<td class="ml-5">{{ $user->email }}</td>
// 											</tr>
// 											<tr>
// 												<th scope="col">Date Of Birth :</th>
// 												<td class="ml-5">{{ $user->dob }}</td>
// 											</tr>
// 											<tr>
// 												<th scope="col">Blood Group :</th>
// 												<td class="ml-5">{{ $user->blood_group }}</td>
// 											</tr>
// 										</table>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 					<div class="container my-2">
// 						<div class="row justify-content-center p-3">
// 							<div class="col-lg-8">
// 								<div class="card p-5">
// 									<p class="text-left mb-5">ACADEMIC INFORMATION</p>
// 									<div class="user_details p-3">
// 										<table class="table">
// 											<tr>
												
// 												<th scope="col">Certificate Name :</th>
// 												<td class="ml-5">{{ $user->certificate_name }}</td>
// 											</tr>
// 											<tr>
// 												<th scope="col">Roll Number :</th>
// 												<td class="ml-5">{{ $user->roll_number }}</td>
// 											</tr>
// 											<tr>
// 												<th scope="col">Batch :</th>
// 												<td class="ml-5">{{ $user->batch }}</td>
// 											</tr>
// 											<tr>
// 												<th scope="col">Department :</th>
// 												<td class="ml-5">{{ $user->department }}</td>
// 											</tr>
// 											<tr>
// 												<th scope="col">Institution :</th>
// 												<td class="ml-5">{{ $user->institution }}</td>
// 											</tr>
// 										</table>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 					<div class="container my-2">
// 						<div class="row justify-content-center p-3">
// 							<div class="col-lg-8">
// 								<div class="card p-5">
// 									<p class="text-left mb-5">CONTACT INFORMATION</p>
// 									<div class="user_details p-3">
// 										<table class="table">
// 											<tr>
// 												<th scope="col">Phone Number :</th>
// 												<td class="ml-5">{{ $user->phone }}</td>
// 											</tr>
// 											<tr>
// 												<th scope="col">Facebook ID :</th>
// 												<td class="ml-5">{{ $user->facebook_id }}</td>
// 											</tr>
// 											<tr>
// 												<th scope="col">LinkedIn ID :</th>
// 												<td class="ml-5">{{ $user->linkedin_id }}</td>
// 											</tr>
// 											<tr>
// 												<th scope="col">Status :</th>
// 												<td class="ml-5">{{ $user->status }}</td>
// 											</tr>
											
// 										</table>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
				
		
// 			</div>
			
// 		<Footer />



//         </>

//     )
// }

// export default StudentProfile;