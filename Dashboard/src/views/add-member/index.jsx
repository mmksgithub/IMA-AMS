import React, { useState } from 'react';
import { TextField, Button, Box, Grid } from '@mui/material';
import { toast, ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainCard from 'ui-component/cards/MainCard';

const AddMember = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
  });

  // Handle form field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Simulate form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, role } = formData;

    if (!name || !email || !phone || !role) {
      toast.error('Please fill all member details.');
      return;
    }

    // Simulate successful form submission
    toast.success('Member added successfully', {
        style: {
            backgroundColor: "#C7FFEF", // Green background
            color: "#006633",             // White text
            fontWeight: "bold",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
           
        },
      });

    

    // Reset form for testing purposes
    setFormData({
      name: '',
      email: '',
      phone: '',
      role: '',
    });
  };

  // Clear form fields
  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      role: '',
    });
    toast.info('Form cleared!');
  };

  return (
    <MainCard title="Add New Member">
      <Box component="form" noValidate onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Box
          mt={3}
          display="flex"
          justifyContent="flex-start"
          gap={2}
        >
          <Button variant="contained" color="secondary" animation="scale" type="submit" size="large"           
          // sx={{
          //     '&:hover': {
          //       backgroundColor: '#006633',  // Custom color on hover
          //       color: 'white',              // Text color change on hover
          //     },
          //     backgroundColor: '#4CAF50',    // Initial button color
          //     color: 'white',
          //   }}
            >
           Add Member
          </Button>
          <Button variant="outlined" size="large" color="secondary" onClick={handleClear}>
            Clear
          </Button>
        </Box>
      </Box>
      {/* Toast Container */}
      <ToastContainer
        position="top-center"
        autoClose={4000}
        newestOnTop={true}
        closeButton={false} 
        transition={Slide} // Smooth sliding transition
        style={{ 
            
        }}
      />    </MainCard>
  );
};

export default AddMember;

















