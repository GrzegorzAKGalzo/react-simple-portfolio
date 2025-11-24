import React, { useState } from "react";
import { TextField, Button, MenuItem, Box, Grid, Alert } from "@mui/material";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    service: "",
    message: "",
    budget: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })

    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 900,
        mx: "auto",
        mt: 5,
        border: 1,
        borderColor: "#dbdbdb",
        p: 3,
        borderRadius: 2,
        backgroundColor: "#fff",
      }}
    >
      {success && (
        <Alert severity="success">Wiadomość wysłana pomyślnie!</Alert>
      )}

      <Grid container spacing={2} mt={1}>
        <Grid item size={6}>
          <TextField
            fullWidth
            label="Imię"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </Grid>

        <Grid item size={6}>
          <TextField
            fullWidth
            label="Nazwisko"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            required
          />
        </Grid>

        <Grid size={12} item>
          <TextField
            select
            fullWidth
            label="Usługa"
            name="service"
            value={form.service}
            onChange={handleChange}
            required
          >
            <MenuItem value="strona www">Strona internetowa</MenuItem>
            <MenuItem value="sklep">Sklep internetowy</MenuItem>
            <MenuItem value="inne">Inne</MenuItem>
          </TextField>
        </Grid>

        <Grid size={12} item>
          <TextField
            fullWidth
            multiline
            minRows={4}
            label="Wiadomość"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
          />
        </Grid>

        <Grid size={12} item>
          <TextField
            fullWidth
            label="Budżet (opcjonalnie)"
            name="budget"
            value={form.budget}
            onChange={handleChange}
          />
        </Grid>

        <Grid size={12} item>
          <Button
            disableElevation
            fullWidth
            variant="contained"
            size="large"
            type="submit"
            sx={{ py: 1.5, fontSize: "1.1rem" }}
          >
            Wyślij wiadomość
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
