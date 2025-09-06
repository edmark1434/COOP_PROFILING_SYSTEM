from django.db import models

# Create your models here.
class Coop(models.Model):
    COOP_TYPE_CHOICES = [
        ('Credit', 'Credit'),
        ('Consumer', 'Consumer'),
        ('Producer', 'Producer'),
        ('Marketing', 'Marketing'),
        ('Service', 'Service'),
        ('Multipurpose', 'Multipurpose'),
    ]
    coop_id = models.AutoField(primary_key=True)
    coop_name = models.CharField(max_length=150,null=False)
    coop_reg_num = models.CharField(max_length=100,null=False,unique=True)
    coop_reg_date = models.DateField(null=False)
    coop_type = models.CharField(max_length=20,choices=COOP_TYPE_CHOICES,null=False)
    coop_address = models.CharField(max_length=255,null=True)
    coop_mem_count = models.IntegerField(default=0)
    
class Member(models.Model):
    roles = [
        ('New','New'),('Inactive','Inactive'),('Withdrawn','Withdrawn'),('Active','Active')
    ]
    member_id = models.AutoField(primary_key=True)
    member_fname = models.CharField(max_length=100,null=False)
    member_lname = models.CharField(max_length=100,null=False)
    member_pnum = models.CharField(max_length=20,null=True)
    member_address = models.CharField(max_length=255,null=False)
    member_status = models.CharField(max_length=20,choices=roles,default='New',null=False)
    member_joindate = models.DateField()
    member_exitdate = models.DateField()
    coop_id = models.ForeignKey(
        Coop, on_delete=models.CASCADE, related_name='members'
    )

class Biometric(models.Model):
    bio_id = models.AutoField(primary_key=True)
    member_id = models.ForeignKey(
        Member,
        on_delete=models.CASCADE,
        related_name='biometrics'
    )
    finger_data = models.BinaryField()
    created_at = models.DateTimeField(auto_now_add=True)
    
class Transaction(models.Model):
    trans_id = models.AutoField(primary_key=True)
    TRANS_TYPE = [
        ('Contribution','Contribution'),
        ('Loan','Loan')
    ]
    SUB_TYPE = [
        ('Savings','Savings'),('Share Capital','Share Capital'),('Donation','Donation'),('Loan Repayment','Loan Repayment'),('Loan Disbursement','Loan Disbursement')
    ]
    STATUS = [
        ('Pending','Pending'),('Approved','Approved'),('Paid','Paid'),('Defaulted','Defaulted')
    ]
    trans_type = models.CharField(max_length=20,choices=TRANS_TYPE)
    trans_subtype = models.CharField(max_length=25,choices=SUB_TYPE,null=False)
    trans_amount = models.DecimalField(max_digits=12,decimal_places=2)
    trans_balance = models.DecimalField(max_digits=12,decimal_places=2)
    trans_status = models.CharField(max_length=25,choices=STATUS,null=False)
    trans_date = models.DateField()
    trans_due_date = models.DateField()
    coop_id = models.ForeignKey(
        Coop,
        on_delete=models.CASCADE,
        related_name='transactions')
    member_id = models.ForeignKey(
        Member,
        on_delete=models.CASCADE,
        related_name='transactions'
    )
class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=50,unique=True,null=False)
    password = models.CharField(max_length=255,null=False)
    ROLE_TYPE = [
        ('Admin','Admin'),('Officer','Officer'),('Member','Member')
    ]
    role = models.CharField(max_length=20,choices=ROLE_TYPE,null=False)
    member_id = models.ForeignKey(
        Member,
        on_delete=models.CASCADE,
        related_name='users'
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Notification(models.Model):
    notif_id = models.AutoField(primary_key=True)
    notif_message = models.CharField(max_length=255,null=False)
    status = [
        ('Unread','Unread'),('Read','Read')
    ]
    notif_status = models.CharField(max_length=20,choices=status,default='Unread')
    created_at = models.DateTimeField(auto_now_add=True)
    user_id = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='notifications'
    )

class AuditLogs(models.Model):
    aud_id = models.AutoField(primary_key=True)
    aud_action = models.CharField(max_length=255,null=False)
    timestamp = models.DateTimeField(auto_now_add=True)
    user_id = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='audits'
    )

class HelpSupport(models.Model):
    help_id = models.AutoField(primary_key=True)
    help_subject = models.CharField(max_length=150,null=False)
    help_desc = models.TextField(null=True)
    status = [
        ('Open','Open'),('In Progress', 'In Progress'),('Resolved','Resolved'),('Closed','Closed')
    ]
    priority = [
        ('Low','Low'),('Medium', 'Medium'),('High','High'),('Urgent','Urgent')
    ]
    help_status = models.CharField(max_length=25,choices=status,null=False,default='Open')
    help_prio = models.CharField(max_length=20,choices=priority,null=False,default='Low')
    help_created_at = models.DateTimeField(auto_now_add=True)
    help_upd_at = models.DateTimeField(auto_now=True)
    help_reso = models.TextField(null=True)
    member_id = models.ForeignKey(
        Member,
        on_delete=models.CASCADE,
        related_name='helps'
    )
    user_id = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='users'
    )

class Announcement(models.Model):
    anoun_id = models.AutoField(primary_key=True)
    anoun_title = models.CharField(max_length=200,null=False)
    anoun_content = models.TextField(null=False)
    anoun_created_at = models.DateTimeField(auto_now_add=True)
    coop_id = models.ForeignKey(Coop,on_delete=models.CASCADE,related_name='coops')
    user_id = models.ForeignKey(User,on_delete=models.CASCADE,related_name='users')
    