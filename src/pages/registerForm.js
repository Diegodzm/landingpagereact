import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import '../styles/registerForm.css';

function RegisterForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      // Reset form
      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
      // In a real app, you would send this data to your backend
      console.log('Form submitted:', formData);
      setTimeout(() => setSubmitted(false), 3000);
    } else {
      setErrors(newErrors);
    }
  };

  const handleReset = () => {
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    setErrors({});
  };

  return (
    <div className="register-container">
      {/* Hero Section */}
      <section className="register-hero">
        <h1 className="register-hero-title">Create Your Account</h1>
        <p className="register-hero-subtitle">Join our community and get started today</p>
      </section>

      {/* Registration Form Section */}
      <section className="register-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6} md={8} xs={12}>
              {submitted && (
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                  <strong>Success!</strong> Your registration was successful. Welcome!
                </div>
              )}

              <Card className="register-card">
                <Card.Body className="register-card-body">
                  <Form onSubmit={handleSubmit} noValidate>
                    {/* Username Field */}
                    <Form.Group className="mb-4">
                      <Form.Label className="form-label">Username</Form.Label>
                      <Form.Control
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        isInvalid={!!errors.username}
                        placeholder="Enter your username"
                        className="form-input"
                      />
                      <Form.Control.Feedback type="invalid" className="error-text">
                        {errors.username}
                      </Form.Control.Feedback>
                    </Form.Group>

                    {/* Email Field */}
                    <Form.Group className="mb-4">
                      <Form.Label className="form-label">Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                        placeholder="Enter your email"
                        className="form-input"
                      />
                      <Form.Control.Feedback type="invalid" className="error-text">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>

                    {/* Password Field */}
                    <Form.Group className="mb-4">
                      <Form.Label className="form-label">Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        isInvalid={!!errors.password}
                        placeholder="Enter your password"
                        className="form-input"
                      />
                      <Form.Control.Feedback type="invalid" className="error-text">
                        {errors.password}
                      </Form.Control.Feedback>
                    </Form.Group>

                    {/* Confirm Password Field */}
                    <Form.Group className="mb-4">
                      <Form.Label className="form-label">Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        isInvalid={!!errors.confirmPassword}
                        placeholder="Confirm your password"
                        className="form-input"
                      />
                      <Form.Control.Feedback type="invalid" className="error-text">
                        {errors.confirmPassword}
                      </Form.Control.Feedback>
                    </Form.Group>

                    {/* Buttons */}
                    <div className="button-group">
                      <Button
                        type="submit"
                        className="btn-submit"
                      >
                        Create Account
                      </Button>
                      <Button
                        type="reset"
                        className="btn-reset"
                        onClick={handleReset}
                      >
                        Clear
                      </Button>
                    </div>

                    {/* Login Link */}
                    <div className="login-link">
                      <p>Already have an account? <a href="#login">Log in here</a></p>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 React landingpage. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default RegisterForm;
