import React, { useState, useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import './LoginModal.css';

function LoginModal({ show, onHide }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    captchaChecked: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Reset when modal opens
  useEffect(() => {
    if (show) {
      setFormData({
        username: '',
        password: '',
        captchaChecked: false,
      });
      setErrors({});
    }
  }, [show]);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    setFormData({
      ...formData,
      [name]: fieldValue,
    });
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
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    if (!formData.captchaChecked) {
      newErrors.captchaChecked = 'Please verify that you are not a robot';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      console.log('Login submitted:', { username: formData.username });
      
      // Reset and close modal after 1.5 seconds
      setTimeout(() => {
        setFormData({
          username: '',
          password: '',
          captchaChecked: false,
        });
        setSubmitted(false);
        onHide();
      }, 1500);
    } else {
      setErrors(newErrors);
    }
  };

  const handleReset = () => {
    setFormData({
      username: '',
      password: '',
      captchaChecked: false,
    });
    setErrors({});
  };

  return (
    <Modal show={show} onHide={onHide} centered className="login-modal">
      <Modal.Header closeButton className="login-modal-header">
        <Modal.Title>Login to Your Account</Modal.Title>
      </Modal.Header>
      <Modal.Body className="login-modal-body">
        {submitted && (
          <div className="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Success!</strong> Welcome back! Redirecting...
          </div>
        )}

        <Form onSubmit={handleSubmit} noValidate>
          {/* Username Field */}
          <Form.Group className="mb-3">
            <Form.Label className="form-label">Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              isInvalid={!!errors.username}
              placeholder="Enter your username"
              className="modal-form-input"
              disabled={submitted}
            />
            <Form.Control.Feedback type="invalid">
              {errors.username}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Password Field */}
          <Form.Group className="mb-3">
            <Form.Label className="form-label">Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              isInvalid={!!errors.password}
              placeholder="Enter your password"
              className="modal-form-input"
              disabled={submitted}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Captcha Checkbox */}
          <Form.Group className="mb-3">
            <div className="captcha-checkbox-container">
              <Form.Check
                type="checkbox"
                name="captchaChecked"
                id="captchaCheck"
                label="I'm not a robot"
                checked={formData.captchaChecked}
                onChange={handleChange}
                className="captcha-checkbox"
                disabled={submitted}
              />
              {errors.captchaChecked && (
                <div className="captcha-error">{errors.captchaChecked}</div>
              )}
              <div className="captcha-branding">
                <small>Protected by reCAPTCHA</small>
              </div>
            </div>
          </Form.Group>

          {/* Buttons */}
          <div className="modal-button-group">
            <Button
              type="submit"
              className="btn-login"
              disabled={submitted}
            >
              {submitted ? 'Logging in...' : 'Login'}
            </Button>
            <Button
              type="reset"
              className="btn-cancel"
              onClick={handleReset}
              disabled={submitted}
            >
              Clear
            </Button>
          </div>
        </Form>

        {/* Forgot Password Link */}
        <div className="modal-footer-link">
          <a href="#forgot">Forgot your password?</a>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default LoginModal;
