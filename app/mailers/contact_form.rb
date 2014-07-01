class ContactForm < ActionMailer::Base
  default from: "from@example.com"
  
  def contact_email(fname, email, mess)
    @fname = fname
    @email = email
    @mess = mess
    subject = "KAITLYNHOVA.COM INQUIRY"
    mail(
      to: ENV["EMAIL"], 
      subject: subject
    )
  end
end
