# IT Infrastructure

Every financial transaction a company records passes through hardware, software, and networks before it reaches the general ledger. That technology is the entity's **IT infrastructure**, and a CPA cannot judge a control without first knowing where it sits in that infrastructure. More and more of it now lives in the cloud, which changes who runs each layer and who is responsible for its controls.

This chapter starts with the basic building blocks of IT architecture, then turns to cloud computing: the service models, the deployment models, and the shared responsibility between a cloud provider and its customer. It ends with COSO's guidance on governing the use of cloud services. The exam tests this material mostly at the Remembering and Understanding level, so focus on what each component does and why it matters for controls.

---

## Key Components of IT Architecture

**IT architecture** is the overall design of an organization's technology environment: what components exist, how they connect, and how information moves among them. The blueprint highlights four components: operating systems, servers, network infrastructure, and end-user devices.

### Operating Systems

An **operating system (OS)** is the software that manages a computer's hardware and provides services to the applications running on it. Windows, macOS, and Linux run most desktops and servers; iOS and Android run most mobile devices.

The operating system matters to an auditor because so many controls live there. It authenticates users, enforces file permissions and security settings, and produces the logs that show who did what. It is also a common point of attack: an unpatched OS or one left with default settings can expose every application running on it.

**Example:** **Bear Co.** runs its accounting software on a Windows server. In evaluating that environment, the auditor would ask whether the server is patched, whether user accounts follow least privilege, and whether audit logging is turned on.

### Servers

A **server** is a computer, or a program, that provides data or services to other computers (clients) over a network. A server can be a physical machine in the company's own data center or a **virtual machine**: software that behaves like a separate computer, many of which can run on one physical host under a layer of software called a **hypervisor**.

| Server Type | Purpose | Example |
|---|---|---|
| **Application server** | Runs business applications such as ERP or CRM software | Processes journal entries in the accounting module |
| **Database server** | Stores and manages the data that applications use | Holds the general ledger database |
| **Web server** | Delivers web pages and web applications to users | Hosts the customer-facing ordering portal |
| **File server** | Provides central storage for documents | Stores financial reports and workpapers |
| **Mail server** | Sends, receives, and stores email | Handles company email, including sensitive correspondence |

### Network Infrastructure

**Network infrastructure** is the hardware and software that lets devices communicate. The main pieces are:

- **Routers**, which direct traffic between networks, such as between the company's internal network and the internet.
- **Switches**, which connect devices within the same network.
- **Firewalls**, which allow or block traffic according to predefined rules.
- **Load balancers**, which spread traffic across several servers so that no single server is overwhelmed.
- **Wireless access points**, which connect wireless devices to the network.

You will not be asked to configure any of these, but you should know what each one does for control purposes. A firewall, for example, is a key preventive control: if **Polar Inc.**'s firewall is misconfigured, outsiders may reach its financial systems directly.

### End-User Devices

**End-user devices** are the desktops, laptops, tablets, and phones that employees use to reach the organization's systems. They are a frequent **entry point** for attacks (a phishing email opened on a laptop) and a frequent **exit point** for data (a lost phone, files copied to a personal account). Typical controls include device encryption, mobile device management (MDM) software, endpoint detection and response (EDR) tools, automatic screen locking, remote wipe, and an acceptable use policy. The [Mitigation](../security/mitigation.md) chapter covers these controls in more depth.

---

## Cloud Computing

**Cloud computing** delivers computing resources (processing power, storage, databases, networking, and software) over the internet, on demand, with the customer typically paying for what it uses. Instead of buying and running its own data center, an organization rents these resources from a **cloud service provider (CSP)** such as Amazon Web Services, Microsoft Azure, or Google Cloud. Resources are pooled across many customers and can be scaled up or down quickly.

For a CPA, the key consequence is that some controls move from the organization to the provider. Which controls move depends on the service model the organization buys.

### Cloud Service Models

The three service models differ in how much of the technology stack the provider runs. Think of them as steps away from running everything yourself on premises:

| Model | Full Name | What the CSP Provides | What the Customer Manages | Example |
|---|---|---|---|---|
| **IaaS** | Infrastructure as a Service | Virtualized servers, storage, and networking | Operating systems, middleware, applications, and data | Renting virtual servers and installing your own software |
| **PaaS** | Platform as a Service | IaaS plus operating systems, middleware, and development tools | The applications it builds and its data | Building a custom app on a provider's development platform |
| **SaaS** | Software as a Service | A complete application, used through a browser or app | Configuration, user access, and data | Subscribing to a hosted accounting or CRM application |

:::tip[Exam Tip]

Scenario questions often ask which model is being used. Ask **who manages what**. If **Illini Entertainment** rents virtual servers and installs its own operating system and software, that is IaaS. If it builds an app on a ready-made development platform, that is PaaS. If it simply subscribes to a hosted accounting application, that is SaaS.

:::

### Cloud Deployment Models

The **deployment model** describes who shares the cloud environment:

| Deployment Model | Description | Typical Use |
|---|---|---|
| **Public cloud** | Infrastructure shared by many unrelated customers and run by a CSP | Cost-effective standard workloads |
| **Private cloud** | Infrastructure dedicated to one organization, on its premises or hosted by a third party | Strict security or regulatory requirements |
| **Community cloud** | Infrastructure shared by organizations with common requirements, such as government agencies | Shared compliance needs |
| **Hybrid cloud** | A combination of public and private clouds, with data and applications moving between them | Sensitive data kept private, other workloads in the public cloud |

**Example:** **Bear Co.** runs its CRM system in the public cloud but keeps its core financial reporting database in a private cloud because the database is subject to stricter regulatory requirements. This hybrid approach balances cost against control.

### The Shared Responsibility Model

When an organization moves to the cloud, responsibility for controls is divided between the provider and the customer. A common shorthand is that the CSP is responsible for **security of the cloud** (facilities, hardware, and the virtualization layer), while the customer is responsible for **security in the cloud** (its data, its users' access, and how it configures the services it uses). The dividing line moves with the service model:

| Responsibility | On-Premises | IaaS | PaaS | SaaS |
|---|---|---|---|---|
| Physical security of data centers | Customer | CSP | CSP | CSP |
| Physical network and virtualization layer | Customer | CSP | CSP | CSP |
| Operating system patching | Customer | Customer | CSP | CSP |
| Application security | Customer | Customer | Customer | CSP |
| Data classification and protection | Customer | Customer | Customer | Customer |
| Identity and access management | Customer | Customer | Customer | Customer |

Two lessons follow. First, moving to the cloud never transfers all of the responsibility: even under SaaS, the customer decides who gets access and how its data is classified. Second, the customer still needs assurance over the controls the provider runs. It usually gets that assurance from the provider's **SOC reports**: a SOC 1® report for controls relevant to financial reporting, or a SOC 2® report for security, availability, and the other Trust Services categories. Those reports list **complementary user entity controls (CUECs)**, which are controls the provider assumes the customer will perform. When evaluating **Kingfisher Industries**' cloud environment, you would read the provider's SOC report and confirm that Kingfisher actually performs the CUECs and every other control that remains its responsibility.

---

## COSO Guidance on Cloud Computing Governance

The blueprint asks how the COSO frameworks address cloud computing governance, and the References limit that question to COSO's publication *Enterprise Risk Management for Cloud Computing*. The guidance applies enterprise risk management (ERM) to the decision to use cloud services and to the ongoing oversight of those services. Its central message is that outsourcing the technology does not outsource accountability: the board and management remain responsible for governing the entity's use of the cloud, even though the provider operates it.

In practice, cloud governance asks a handful of questions:

- **Strategy and risk appetite.** Does the cloud strategy support the organization's objectives, and do the risks it brings fit within the board's risk appetite?
- **Provider and concentration risk.** What happens if the provider suffers an outage, raises prices, or fails? How hard would it be to move to another provider (vendor lock-in)?
- **Data location and compliance.** Where is the data stored and processed, and does that location satisfy laws such as HIPAA and the GDPR?
- **Contract terms.** Do the agreements cover service levels, incident notification, the right to audit or receive SOC reports, and an exit plan?
- **Unauthorized use.** Can business units sign up for cloud services without IT, legal, or finance knowing (sometimes called "shadow IT")?
- **Ongoing monitoring.** Does management review SOC reports and service-level performance, and reassess cloud risks as the business and the provider change?

One way to organize these questions is by the five components of COSO's ERM framework: governance and culture (board oversight of cloud use), strategy and objective-setting (aligning cloud adoption with strategy and appetite), performance (identifying, assessing, and responding to cloud risks), review and revision (monitoring changes), and information, communication, and reporting (keeping decision makers informed). The [Mitigation](../security/mitigation.md) chapter applies the same framework to cyber risk.

---

## Summary

| Topic | Key Takeaway |
|---|---|
| IT architecture | Operating systems, servers, network infrastructure, and end-user devices each host controls and each can be attacked |
| Service models | IaaS supplies infrastructure, PaaS adds the platform, SaaS delivers the whole application |
| Deployment models | Public, private, community, and hybrid; the choice weighs cost against control and compliance |
| Shared responsibility | The CSP secures the cloud; the customer secures its data, access, and configuration; SOC reports give the customer assurance over the provider |
| COSO and cloud governance | ERM applies to cloud decisions; the board and management stay accountable for risks the provider operates |

---

## Practice Questions

1. **Illini Security** plans to move its financial reporting system to a cloud environment in which the CSP provides the hardware, operating system, and middleware. Illini Security will build and deploy its own application on that platform. Which cloud service model is this?

2. **Polar Inc.** uses a SaaS accounting application. A new employee asks for administrative access to it. Under the shared responsibility model, who decides whether to grant that access: Polar Inc. or the cloud service provider?

3. **Bear Co.** wants assurance over the design and operating effectiveness of its cloud provider's controls related to security, availability, and processing integrity over the past year. What report should Bear Co. request?

:::tip[Answers]

1. **PaaS (Platform as a Service).** The CSP supplies the hardware, operating system, and middleware, and the customer builds its own application on top.

2. **Polar Inc.** Identity and access management stays with the customer even under SaaS. Polar Inc. must decide whether the employee needs administrative rights and set the permissions itself.

3. A **SOC 2® Type 2 report.** It gives an opinion on the design and operating effectiveness of controls relevant to the selected Trust Services categories (here security, availability, and processing integrity) over a period of time.

:::
