# Threats and Attacks

A control makes sense only against a threat. A firewall answers outsiders probing the network, security training answers phishing, and segregation of duties answers the insider who might misuse access. Before a CPA can judge whether an organization's security controls are adequate, the CPA has to know who might attack, how they attack, and what they are after.

This chapter starts with the attackers themselves (threat agents), then the main types of attacks and the specific techniques they use, then the stages a cyber-attack typically moves through. It then looks at the risks specific to cloud, Internet of Things, and mobile environments, at threat modeling, and at how to determine the threats facing a particular organization. Most of this is tested at the Remembering and Understanding level, but expect scenario questions that ask you to identify the threat in a set of facts.

---

## Types of Threat Agents

A **threat agent**, also called a **threat actor**, is any person, group, or organization that could harm an organization's information systems. The blueprint classifies threat agents two ways: by their relationship to the organization (internal or external) and by their backing (nation-state sponsored or not).

**Internal threats** come from people who have, or had, authorized access: employees, contractors, temporary workers, and business partners with system access. They are dangerous because they already hold credentials, know the systems, and can often walk into the building, so their activity looks normal. Not every insider means harm; a careless employee who emails the wrong file is an internal threat too. **External threats** come from people with no authorized access who try to get past the organization's defenses.

| Threat Actor | Description | Typical Motivation | Sophistication |
|---|---|---|---|
| **Script kiddies** | Inexperienced attackers using ready-made tools | Curiosity, bragging rights | Low |
| **Hacktivists** | Attackers promoting a political or social cause | Ideology | Low to moderate |
| **Organized crime** | Criminal groups attacking for money | Fraud, extortion, data theft | Moderate to high |
| **Competitors** | Rivals seeking proprietary information | Trade secrets, competitive advantage | Moderate |
| **Insiders** | Employees or contractors who cause harm intentionally or by accident | Money, revenge, or simple negligence | Varies |
| **Nation-state actors** | Groups working for or sponsored by a government | Espionage, sabotage, political advantage | Very high |
| **Advanced persistent threats (APTs)** | Highly skilled groups, often state-sponsored, that gain access and stay hidden for long periods | Long-term intelligence gathering and theft of intellectual property | Very high |

:::tip[Exam Tip]

When asked to classify a threat agent, answer two questions: is the actor **internal or external**, and is it **nation-state sponsored or not**? A disgruntled employee is internal and not state-sponsored. A government cyber unit is external and state-sponsored.

:::

**Example:** **Bear Co.** discovers that a former contractor kept working VPN credentials after the engagement ended and used them to view financial data. Most security frameworks treat this as an **internal (insider) threat**, because the person's access came from an authorized relationship with Bear Co. The root cause is a failure to revoke access when the engagement ended.

---

## Types of Attacks

Attacks are grouped by the method used to compromise systems, data, or people. The blueprint names physical attacks, distributed denial of service, malware, social engineering, web application attacks, and mobile device attacks.

### Physical Attacks

Physical attacks exploit the physical environment rather than software:

| Attack | Description |
|---|---|
| **Tailgating (piggybacking)** | Following an authorized person through a secured door |
| **Dumpster diving** | Searching discarded paper and equipment for sensitive information |
| **Shoulder surfing** | Watching someone's screen or keyboard to capture passwords or data |
| **Device theft** | Stealing laptops, drives, or phones to get at the data on them |
| **Sabotage** | Physically damaging equipment, cables, or facilities |

### Distributed Denial of Service (DDoS)

A **distributed denial of service (DDoS)** attack floods a server, application, or network with traffic from many sources at once, so legitimate users cannot reach it. The traffic usually comes from a **botnet**, a network of compromised computers and devices controlled by the attacker. A DDoS attack targets **availability** rather than stealing data, though attackers sometimes use one as a distraction while they attempt something else.

### Malware

**Malware** (malicious software) is software designed to damage, disrupt, or gain unauthorized access to systems:

| Malware Type | Description | How It Spreads |
|---|---|---|
| **Virus** | Code that attaches to a legitimate program or file and runs when it runs | Needs a user action, such as opening a file |
| **Worm** | Self-replicating malware that spreads across networks by itself | Automatically, through network vulnerabilities |
| **Trojan horse** | Malware disguised as legitimate software | The user installs what looks like a useful program |
| **Ransomware** | Encrypts the victim's data and demands payment for the key; many groups also steal the data and threaten to publish it | Phishing or exploited vulnerabilities |
| **Spyware** | Secretly monitors activity and collects information | Bundled with downloads or installed through exploits |
| **Rootkit** | Hides deep in the operating system to give the attacker persistent, hidden access | Installed after an initial compromise |
| **Keylogger** | Records keystrokes to capture passwords and card numbers | Through a Trojan or physical access |

### Social Engineering

**Social engineering** manipulates people instead of exploiting technology:

| Attack | Description | Medium |
|---|---|---|
| **Phishing** | Mass messages impersonating a trusted party to steal credentials or deliver malware | Email |
| **Spear phishing** | Phishing aimed at a particular person or organization, using personal details | Email |
| **Whaling** | Spear phishing aimed at senior executives | Email |
| **Business email compromise** | Impersonating an executive or vendor to trick staff into sending money or changing payment details | Email |
| **Vishing** | Voice phishing by phone | Phone |
| **Smishing** | Phishing by text message | Text message |
| **Pretexting** | Inventing a believable scenario to win trust and extract information | Any |
| **Baiting** | Leaving infected media, such as USB drives, where someone will plug them in | Physical |

Social engineering is one of the most common ways attackers get in, and technical controls cannot fully stop it because it targets people. **Security awareness training**, together with procedures such as calling a vendor back at a known number before changing its bank details, is the key control.

### Web Application and Mobile Device Attacks

**Web application attacks** exploit weaknesses in web-based software. The main examples, SQL injection and cross-site scripting, are techniques covered in the next section. Two others are **cross-site request forgery**, which tricks a logged-in user's browser into performing an action the user did not intend, and **session hijacking**, which steals or predicts a session token to impersonate a logged-in user.

**Mobile device attacks** include malicious apps (often from unofficial app stores), interception of traffic on unsecured Wi-Fi, SMS-based attacks such as smishing, and **SIM swapping**, in which an attacker persuades a mobile carrier to move the victim's phone number to a new SIM card and then receives the victim's text-message login codes. Mobile risks are covered more fully below.

---

## Cyber-Attack Techniques

The blueprint lists specific **techniques** used to carry out cyber-attacks:

| Technique | How It Works | Typical Impact |
|---|---|---|
| **Buffer overflow** | Sends more data to a memory buffer than it can hold, overwriting adjacent memory, sometimes with code the attacker supplies | Crashes or execution of the attacker's code |
| **Mobile code** | Code downloaded from a remote source and run on the user's device, such as scripts in a web page or email | Unauthorized actions on the user's device |
| **Cross-site scripting (XSS)** | Injects malicious script into a web page that other users' browsers then run | Stolen sessions or credentials, defaced pages |
| **SQL injection** | Inserts SQL commands into an input field so that the application's database query does something unintended | Reading, changing, or deleting data; bypassing login |
| **Race condition** | Exploits the gap between when a system checks a condition and when it acts on it | Unauthorized transactions, privilege escalation |
| **Covert channel** | Moves information through a path not intended for communication, such as timing patterns, in violation of security policy | Undetected data exfiltration |
| **Replay attack** | Captures valid authentication data or messages and resends them later | Impersonation, unauthorized access |
| **Return-oriented programming** | Chains together short pieces of code already in memory ("gadgets") to perform malicious actions without injecting new code | Gets around defenses that block injected code |

**Example:** An attacker finds that **Polar Inc.**'s customer portal does not validate input. Typing `' OR 1=1 --` into the username field changes the login query so that it is always true, and the attacker is logged in without a password. That is **SQL injection**.

Buffer overflows, SQL injection, and cross-site scripting all exploit software that trusts its input. **Input validation** and secure coding practices (such as parameterized database queries) prevent them. Other techniques need different defenses: timestamps and one-time tokens defeat replay attacks, and careful design of check-then-act logic prevents race conditions.

---

## Stages of a Cyber-Attack

A serious cyber-attack is not a single event. It unfolds in stages, and each stage is a chance for the defender to detect and stop it. The blueprint uses these stages:

| Stage | What the Attacker Does |
|---|---|
| **Reconnaissance** | Gathers information about the target: scanning networks, studying websites and social media, collecting employee names |
| **Gaining access** | Gets into a system by exploiting a vulnerability, using stolen credentials, or tricking a user |
| **Escalation of privileges** | Moves from an ordinary account to administrator-level access |
| **Maintaining access** | Installs backdoors, rootkits, or new accounts so the access survives reboots and password changes |
| **Network exploitation** | Moves through the network to reach other systems and the data the attacker wants, then takes or damages it |
| **Covering tracks** | Deletes or alters logs and other evidence of the intrusion |

You may also see the **Lockheed Martin Cyber Kill Chain**, an older model that describes the same progression in seven steps: reconnaissance, weaponization (building the malicious payload), delivery (sending it, for example by email), exploitation (the payload runs), installation (malware is installed to persist), **command and control** (the compromised system contacts the attacker for instructions), and actions on objectives (stealing, changing, or destroying data).

Both models carry the same lesson: the earlier in the chain the defender detects and breaks the attack, the less damage it does. Reconnaissance is hard to detect, but an alert at the gaining-access or privilege-escalation stage can stop an attacker before any data leaves the building.

---

## Cloud, IoT, and Mobile Risks

### Cloud Environments

Cloud computing brings risks that are absent or smaller on premises:

| Risk | Description |
|---|---|
| **Shared responsibility gaps** | Each side assumes the other secures something, so nobody does |
| **Misconfiguration** | Storage left publicly readable, or security settings left at insecure defaults |
| **Insecure APIs** | The interfaces used to manage cloud services can be exploited |
| **Multi-tenancy** | Many customers share infrastructure, so a failure in the provider's isolation could expose one customer's data to another |
| **Account hijacking** | Stolen cloud administrator credentials can give an attacker control of the whole environment |
| **Provider insiders** | The provider's own staff may have access to customer data |
| **Data location** | Data stored in another country may be subject to different laws |

**Example:** **Illini Security** moves an application to the public cloud and leaves the storage bucket holding customer records readable by anyone on the internet. That is a **misconfiguration**, and it is the customer's responsibility under the shared responsibility model, not the provider's.

### Internet of Things (IoT)

The **Internet of Things (IoT)** is the network of physical devices, such as sensors, cameras, thermostats, and industrial equipment, that connect to the internet and exchange data. Each one widens the attack surface.

| Risk | Description |
|---|---|
| **Default credentials** | Devices ship with factory usernames and passwords that are never changed |
| **No patching** | Manufacturers may never release firmware updates, so known flaws stay open |
| **Limited computing power** | Many devices cannot run encryption or security software |
| **Scale** | Thousands of devices mean thousands of entry points |
| **Botnet recruitment** | Compromised devices are drafted into botnets for DDoS attacks |
| **Insecure communication** | Devices may send data unencrypted |
| **Physical exposure** | Devices installed in public places can be tampered with |

The 2016 Mirai botnet showed the danger: it took over large numbers of cameras and routers that still used default passwords and used them to launch some of the largest DDoS attacks seen up to that time.

### Mobile Technologies

Mobile devices carry corporate data outside the organization's physical perimeter:

| Risk | Description |
|---|---|
| **Bring your own device (BYOD)** | Personal devices used for work may lack enterprise security controls |
| **Jailbreaking or rooting** | Removing the manufacturer's restrictions disables built-in protections |
| **Unsecured Wi-Fi** | Public networks expose traffic to interception (man-in-the-middle attacks) |
| **Malicious or flawed apps** | Apps can steal or leak data stored on the device |
| **Loss or theft** | A lost device may expose stored data and logged-in apps |
| **Outdated software** | Users who skip updates miss security patches |
| **Data leakage** | Corporate data drifts into personal cloud storage, messaging apps, or screenshots |

**Example:** A **Kingfisher Industries** employee reads company email on a personal phone over a coffee shop's public Wi-Fi without using a VPN. An attacker on the same network intercepts the traffic and captures the employee's email password: a **man-in-the-middle attack** made possible by unsecured Wi-Fi on an unmanaged device.

---

## Threat Modeling and the Threat Landscape

**Threat modeling** is a structured way to find and address the threats to a particular system, ideally while it is being designed. It answers four questions: What are we working on? What can go wrong? What are we going to do about it? Did we do a good enough job? Common methods include:

| Method | Description |
|---|---|
| **STRIDE** | Sorts threats into six types: **S**poofing, **T**ampering, **R**epudiation, **I**nformation disclosure, **D**enial of service, and **E**levation of privilege |
| **PASTA** | The Process for Attack Simulation and Threat Analysis, a seven-stage method that ties threats to business risk |
| **Attack trees** | Diagrams with the attacker's goal at the root and the ways to reach it as branches |

The **threat landscape** is the full set of threats facing an organization at a given time. It depends on the organization's industry, its locations and the laws that apply there, its technology and attack surface, its public profile, and current events and attack trends. Because the landscape keeps changing, organizations should reassess it regularly so their controls keep up.

---

## Determining the Threats to an Organization

At the Application level, the blueprint asks you to determine the specific threats an organization faces. Two angles help.

**Connections with customers, vendors, and partners.** Every connection to an outside party is a path in or out:

| Connection | Threats | Controls |
|---|---|---|
| **Vendors with access** | A compromised vendor becomes the attacker's way in; vendors may hold more access than they need | Vendor risk assessments, SOC reports, least-privilege access, network segmentation |
| **Customer portals** | Web application attacks, credential stuffing (trying stolen passwords in bulk), DDoS | Web application firewalls, rate limiting, multi-factor authentication |
| **Partner integrations** | Insecure APIs, or a compromised partner system sending bad data or commands | API security testing, strong authentication between systems, sharing only needed data |
| **Software and hardware supply chain** | Malicious code inserted into a trusted product or update | Vendor due diligence, verifying software integrity, tracking third-party components |

**Example:** **Illini Entertainment** connects its ticketing system to a third-party payment processor through an API. If the processor is compromised, attackers could use that trusted connection to reach Illini Entertainment's customer database. The response is a vendor risk assessment of the processor and segmentation that limits what the API connection can reach.

**On-premises and cloud assets.** Each type of asset has characteristic threats:

| Asset | Key Threats | Where to Look |
|---|---|---|
| **On-premises applications** | Unpatched software, insiders, physical access | Patch management, access controls, physical security |
| **Cloud applications** | Misconfiguration, stolen credentials, insecure APIs | Configuration monitoring, identity and access management, the provider's SOC report |
| **Networks** | Interception, unauthorized access, DDoS, lateral movement | Segmentation, firewall rules, intrusion detection and prevention |
| **Mobile devices** | Loss, malware, unsecured connections, data leakage | Mobile device management, encryption, remote wipe, app allowlisting |
| **IoT devices** | Default credentials, unpatched firmware, botnet recruitment | Network isolation, credential management, firmware updates |

Always fit the analysis to the organization. A hospital's top threats (ransomware that halts patient care, theft of health records) differ from a bank's (wire fraud, account takeover) and from a manufacturer's (theft of designs, sabotage of production systems).

---

## Summary

| Topic | Key Takeaway |
|---|---|
| Threat agents | Classify as internal or external and as nation-state sponsored or not; APTs and nation-states are the most sophisticated |
| Types of attacks | Physical, DDoS, malware, social engineering, web application, and mobile device attacks |
| Techniques | Buffer overflow, mobile code, XSS, SQL injection, race conditions, covert channels, replay, return-oriented programming |
| Attack stages | Reconnaissance, gaining access, escalating privileges, maintaining access, network exploitation, covering tracks |
| Cloud, IoT, and mobile | Misconfiguration and shared-responsibility gaps; default credentials and unpatched devices; BYOD, lost devices, and unsecured Wi-Fi |
| Threat modeling | Structured methods such as STRIDE, PASTA, and attack trees; the threat landscape changes and must be reassessed |
| Determining threats | Look at third-party connections and at each type of asset, in the context of the organization's industry |

---

## Practice Questions

1. **Bear Co.**, a manufacturer, finds that an attacker has been inside its network for six months, quietly copying files about a proprietary production process. The attacker uses custom malware that no public threat database recognizes and appears to be well funded. How should this threat agent be classified?

2. **Polar Inc.** learns that a storage bucket used by its cloud HR application, which holds employee Social Security numbers, can be read by anyone who has the URL, with no login required. What cloud risk is this, and who is responsible for fixing it?

3. **Kingfisher Industries** runs a smart building with 2,000 IoT sensors and cameras whose factory-default passwords were never changed. An audit finds several devices sending traffic to unknown external IP addresses. What IoT risk has materialized, and what attack stage does the traffic suggest?

:::tip[Answers]

1. An **advanced persistent threat (APT)**, very likely **external and nation-state sponsored**. The signs are the long, stealthy presence, custom malware, the focus on intellectual property, and the resources behind the attack. APT groups are often, though not always, state-sponsored.

2. A **misconfiguration** of cloud storage, and it is **Polar Inc.**'s responsibility. The provider supplies the tools to restrict access, but configuring access to the customer's own data is the customer's job under the shared responsibility model.

3. **Default credentials** let attackers take over the devices, which have likely been **recruited into a botnet**. Devices calling out to unknown addresses for instructions fit the **command and control** step of the Cyber Kill Chain, which corresponds to the attacker **maintaining access** in the blueprint's stages.

:::
