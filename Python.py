import smtplib

sender_email = ''
sender_password = ''
recipient_email = ''
subject = ''
content = ''

message = f"Subject: {subject}\n\n{content}"

try:
    server = smtplib.SMTP("smtp.gmail.com", 587)
    server.ehlo()
    server.starttls()
    server.login(sender_email, sender_password)
    server.sendmail(sender_email, recipient_email, message)
    print("Email sent successfully!")
except Exception as e:
    print(f"An error occurred: {e}")
finally:
    server.quit()