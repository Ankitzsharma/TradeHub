import React, { useState } from 'react';
import axios from 'axios';
import { API_URL, DASHBOARD_URL } from '../../config';

const initialErrors = { email: '', password: '', name: '', form: '' };

function AuthForm() {
  const [mode, setMode] = useState('signin'); // 'signin' | 'signup'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(initialErrors);

  const validate = () => {
    const next = { ...initialErrors };
    const emailRegex = /[^@\s]+@[^@\s]+\.[^@\s]+/;
    if (!emailRegex.test(email)) next.email = 'Please enter a valid email.';
    if (password.length < 6) next.password = 'Password must be at least 6 characters.';
    if (mode === 'signup' && name.trim().length < 2) next.name = 'Name must be at least 2 characters.';
    setErrors(next);
    return !next.email && !next.password && !next.name;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setErrors(initialErrors);
    try {
      const payload = mode === 'signup' ? { email, password, name } : { email, password };
      const url = mode === 'signup' ? `${API_URL}/auth/signup` : `${API_URL}/auth/login`;
      await axios.post(url, payload, { withCredentials: true });
      window.location.href = DASHBOARD_URL;
    } catch (err) {
      const msg = err?.response?.data?.error || 'Something went wrong. Please try again.';
      setErrors((prev) => ({ ...prev, form: msg }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container p-4" style={{ maxWidth: '520px' }}>
      <div className="d-flex justify-content-center mb-3">
        <button
          className={`btn ${mode === 'signin' ? 'btn-primary' : 'btn-outline-primary'} mx-2`}
          onClick={() => setMode('signin')}
        >
          Sign In
        </button>
        <button
          className={`btn ${mode === 'signup' ? 'btn-primary' : 'btn-outline-primary'} mx-2`}
          onClick={() => setMode('signup')}
        >
          Sign Up
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {mode === 'signup' && (
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
            />
            {errors.name && <small className="text-danger">{errors.name}</small>}
          </div>
        )}

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
          {errors.email && <small className="text-danger">{errors.email}</small>}
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••"
            required
          />
          {errors.password && <small className="text-danger">{errors.password}</small>}
        </div>

        {errors.form && <div className="alert alert-danger" role="alert">{errors.form}</div>}

        <button type="submit" className="btn btn-success w-100" disabled={loading}>
          {loading ? 'Please wait…' : (mode === 'signup' ? 'Create account' : 'Sign in')}
        </button>
      </form>
    </div>
  );
}

export default AuthForm;