# Threats and Attacks

Understanding cybersecurity threats and attacks is essential for CPAs working in IT audit, advisory, and assurance. Organizations face a constantly evolving threat landscape — from disgruntled insiders to sophisticated nation-state actors — and each threat requires a different set of controls. As a CPA, you must be able to classify threat agents, identify attack types and techniques, explain how cyber-attacks progress through stages, and evaluate the cybersecurity risks specific to cloud, IoT, and mobile environments.
This section covers **types of threat agents and their motivations**, **categories of attacks**, **specific cyber-attack techniques**, **the stages of a cyber-attack (Cyber Kill Chain)**, **cloud cybersecurity risks**, **IoT cybersecurity risks**, **mobile technology risks**, **threat modeling and threat landscape**, and **determining threats to third-party connections and organizational systems**.
:::info
The ISC exam tests threats and attacks primarily at the Remembering and Understanding level, with select topics tested at the Application and Analysis levels. You should be able to classify threat agents, identify attack types and techniques, explain the stages of a cyber-attack, and determine specific cybersecurity threats for a given scenario.
:::

---

## Types of Threat Agents

A **threat agent** (also called a threat actor) is any individual, group, or entity that has the potential to cause harm to an organization's information systems. Threat agents are classified by their relationship to the organization and by their motivations.

### Internal vs. External Threats

| Classification       | Description                                                                                       | Examples                                                                     |
| -------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| **Internal threats** | Individuals with authorized access to the organization's systems who misuse that access           | Employees, contractors, temporary workers, business partners with VPN access |
| **External threats** | Individuals or groups without authorized access who attempt to breach the organization's defenses | Hackers, organized crime groups, nation-state actors, hacktivists            |

Internal threats are particularly dangerous because insiders already have legitimate credentials, knowledge of internal systems, and physical access to facilities — making detection more difficult.

### Categories of Threat Actors

| Threat Actor                          | Description                                                                                               | Motivation                                    | Sophistication   |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ---------------- |
| **Script kiddies**                    | Inexperienced attackers who use pre-built tools and scripts                                               | Curiosity, bragging rights, minor disruption  | Low              |
| **Hacktivists**                       | Individuals or groups who attack systems to promote a political or social cause                           | Ideological, political activism               | Low to moderate  |
| **Organized crime**                   | Criminal groups that conduct cyber-attacks for financial profit                                           | Financial gain (fraud, extortion, data theft) | Moderate to high |
| **Nation-state actors**               | Government-sponsored groups that conduct cyber espionage or attacks                                       | Espionage, sabotage, geopolitical advantage   | Very high        |
| **Advanced Persistent Threats (APT)** | Highly skilled groups (often nation-state sponsored) that maintain prolonged, stealthy access to a target | Long-term intelligence gathering, IP theft    | Very high        |
| **Insider threats**                   | Employees or contractors who intentionally or accidentally cause harm                                     | Financial gain, revenge, negligence           | Varies           |
| **Competitors**                       | Rival organizations seeking proprietary information                                                       | Competitive advantage, trade secret theft     | Moderate         |

:::tip[Exam Tip]
When a question asks you to classify a threat agent, focus on two factors: (1) whether the actor is **internal or external** to the organization, and (2) whether the actor is **nation-state sponsored or non-nation-state sponsored**. A disgruntled employee is an internal, non-nation-state threat. A government cyber-warfare unit is an external, nation-state threat.
:::
**Example:** **Bear Co.** discovers that a former contractor retained VPN credentials after their engagement ended and used those credentials to access sensitive financial data. This is an **internal threat** (the contractor had authorized access) even though the person is no longer actively employed.

---

## Types of Attacks

Cyber-attacks are categorized by the method used to compromise systems, data, or personnel.

### Physical Attacks

Physical attacks exploit the physical environment rather than digital vulnerabilities:
| Attack | Description |
|---|---|
| **Tailgating (piggybacking)** | Following an authorized person through a secured door without presenting credentials |
| **Dumpster diving** | Searching through discarded materials (trash, recycling) for sensitive information |
| **Shoulder surfing** | Observing someone's screen or keyboard to capture passwords or sensitive data |
| **Theft of devices** | Stealing laptops, USB drives, or mobile devices to access stored data |
| **Vandalism** | Physically damaging equipment, cables, or infrastructure |

### Distributed Denial of Service (DDoS)

A **Distributed Denial of Service (DDoS)** attack overwhelms a target system, server, or network with a flood of traffic from multiple sources, making it unavailable to legitimate users. DDoS attacks do not typically steal data — they disrupt availability.
Key characteristics:

- Traffic originates from many compromised devices (a **botnet**)
- Targets the **availability** principle of the CIA triad
- Can cost organizations significant revenue during downtime
- Often used as a distraction while other attacks occur simultaneously

### Malware

**Malware** (malicious software) is any software designed to damage, disrupt, or gain unauthorized access to computer systems:
| Malware Type | Description | Propagation |
|---|---|---|
| **Virus** | Malicious code that attaches to a legitimate program and executes when the host program runs | Requires user action (opening a file, running a program) |
| **Worm** | Self-replicating malware that spreads across networks without user interaction | Automatic — exploits network vulnerabilities |
| **Trojan horse** | Malware disguised as legitimate software that performs hidden malicious functions | User downloads and installs what appears to be legitimate software |
| **Ransomware** | Encrypts the victim's data and demands payment for the decryption key | Typically via phishing emails or exploited vulnerabilities |
| **Spyware** | Secretly monitors user activity and collects sensitive information | Bundled with downloads or installed via exploits |
| **Rootkit** | Hides deep within the operating system to provide persistent, undetected access | Installed after initial compromise; very difficult to detect |
| **Keylogger** | Records keystrokes to capture passwords, credit card numbers, and other sensitive data | Installed via trojan or physical access |

### Social Engineering

**Social engineering** attacks manipulate human psychology rather than exploiting technical vulnerabilities:
| Attack | Description | Medium |
|---|---|---|
| **Phishing** | Mass emails impersonating a trusted entity to trick recipients into revealing credentials or clicking malicious links | Email |
| **Spear phishing** | Targeted phishing directed at a specific individual or organization using personalized information | Email |
| **Whaling** | Spear phishing targeting senior executives (CEO, CFO) | Email |
| **Vishing** | Voice phishing — using phone calls to trick victims into revealing sensitive information | Phone |
| **Smishing** | SMS phishing — using text messages to deliver malicious links | Text message |
| **Pretexting** | Creating a fabricated scenario to gain a victim's trust and extract information | Any medium |
| **Baiting** | Leaving infected media (USB drives) in public areas hoping someone will plug them in | Physical |
:::warning
Social engineering is the **most common initial attack vector** in data breaches. Technical controls (firewalls, encryption) cannot fully protect against social engineering because these attacks target people, not systems. Organizations must implement **security awareness training** as a critical control.
:::

### Web Application Attacks

Web application attacks target vulnerabilities in web-based software:

- **SQL injection** — inserting malicious SQL code into input fields to manipulate databases
- **Cross-site scripting (XSS)** — injecting malicious scripts into web pages viewed by other users
- **Cross-site request forgery (CSRF)** — tricking authenticated users into performing unintended actions
- **Session hijacking** — stealing or predicting session tokens to impersonate authenticated users

### Mobile Device Attacks

Mobile-specific attacks include:

- Exploiting vulnerabilities in mobile apps
- Man-in-the-middle attacks on unsecured Wi-Fi networks
- Malicious apps distributed through unofficial app stores
- SMS-based attacks (smishing, SIM swapping)
- Exploiting Bluetooth or NFC vulnerabilities

---

## Cyber-Attack Techniques

Beyond the general categories of attacks, the CPA exam requires knowledge of specific **techniques** used to carry out cyber-attacks:
| Technique | Description | Impact |
|---|---|---|
| **Buffer overflow** | Sending more data to a memory buffer than it can hold, causing the program to overwrite adjacent memory and potentially execute malicious code | Code execution, system crash |
| **Mobile code** | Code (e.g., JavaScript, ActiveX, Java applets) that is downloaded and executed on a user's system, potentially without the user's knowledge | Unauthorized actions on the user's device |
| **Cross-site scripting (XSS)** | Injecting client-side scripts into web pages that are then executed in other users' browsers | Session hijacking, credential theft, defacement |
| **SQL injection** | Inserting malicious SQL statements into application queries to read, modify, or delete database content | Data breach, data manipulation, authentication bypass |
| **Race condition** | Exploiting the timing gap between a security check and the use of the checked resource | Privilege escalation, unauthorized transactions |
| **Covert channel** | An unauthorized communication path that transfers information in violation of security policy | Data exfiltration without detection |
| **Replay attack** | Capturing and retransmitting valid authentication data (e.g., login credentials, session tokens) to gain unauthorized access | Authentication bypass |
| **Return-oriented programming (ROP)** | Chaining together short sequences of existing code (called "gadgets") to execute malicious instructions without injecting new code | Bypasses defenses that prevent code injection |
**Example:** An attacker discovers that **MAS Inc.**'s customer portal does not properly validate user input. The attacker enters `' OR 1=1 --` into the login field, which modifies the SQL query to return all records from the user table. This is a **SQL injection** attack that bypasses authentication.
:::caution
Buffer overflow and SQL injection are among the most historically common and dangerous attack techniques. Both exploit a failure to properly **validate input**. Input validation is a critical application-level control that prevents many of these techniques.
:::

---

## Stages of a Cyber-Attack (Cyber Kill Chain)

A cyber-attack is not a single event — it unfolds through a sequence of stages. Understanding these stages helps organizations detect and stop attacks at each phase. Two commonly referenced frameworks describe these stages:

### Lockheed Martin Cyber Kill Chain

```mermaid
graph LR
    A[Reconnaissance] --> B[Weaponization]
    B --> C[Delivery]
    C --> D[Exploitation]
    D --> E[Installation]
    E --> F[Command & Control]
    F --> G[Actions on Objectives]
```

| Stage                      | Description                                                                                          | Example                                                      |
| -------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| **Reconnaissance**         | Attacker researches the target — gathering information about systems, employees, and vulnerabilities | Scanning **Gies Co.**'s public-facing servers for open ports |
| **Weaponization**          | Attacker creates a deliverable payload (e.g., malware embedded in a document)                        | Building a malicious PDF exploiting a known vulnerability    |
| **Delivery**               | Attacker transmits the weapon to the target                                                          | Sending a spear-phishing email to Gies Co.'s CFO             |
| **Exploitation**           | The payload triggers and exploits a vulnerability                                                    | The malicious PDF executes code when opened                  |
| **Installation**           | Malware is installed on the target system to establish persistence                                   | A backdoor is installed on the CFO's workstation             |
| **Command & Control (C2)** | The compromised system establishes a communication channel back to the attacker                      | The backdoor connects to an external server for instructions |
| **Actions on Objectives**  | The attacker achieves their goal (data exfiltration, destruction, manipulation)                      | Financial data is exfiltrated to an external server          |

### Alternative Stage Model (Exam-Referenced)

The CPA exam also references these stages:
| Stage | Description |
|---|---|
| **Reconnaissance** | Gathering information about the target (network scanning, social media research, OSINT) |
| **Gaining access** | Exploiting a vulnerability or using stolen credentials to enter the system |
| **Escalation of privileges** | Moving from a low-privilege account to administrator or root access |
| **Maintaining access** | Installing backdoors, rootkits, or other persistence mechanisms to retain access |
| **Network exploitation** | Moving laterally across the network to access additional systems and data |
| **Covering tracks** | Deleting logs, modifying timestamps, and removing evidence of the intrusion |
:::tip[Exam Tip]
Both stage models describe the same concept — a cyber-attack progresses through sequential phases. A key takeaway is that **early detection is critical**. If an organization detects an attacker during the reconnaissance phase, it can prevent all subsequent stages. The further an attacker progresses, the more damage they can inflict and the harder it is to contain.
:::

---

## Cloud Cybersecurity Risks

Cloud computing introduces unique cybersecurity risks that do not exist (or are less prominent) in traditional on-premises environments:
| Risk | Description |
|---|---|
| **Shared responsibility gaps** | Misunderstanding of which controls are the CSP's responsibility vs. the customer's, leading to unprotected areas |
| **Misconfigured storage** | Cloud storage buckets (e.g., AWS S3) left publicly accessible due to incorrect permission settings |
| **API vulnerabilities** | Insecure application programming interfaces used to manage cloud services can be exploited |
| **Data co-mingling** | In multi-tenant environments, one customer's data may be logically stored alongside another's, creating isolation risks |
| **Insider threats at CSP** | Employees of the cloud service provider may have access to customer data |
| **Account hijacking** | Stolen cloud credentials can give attackers full control over the organization's cloud environment |
| **Data residency and sovereignty** | Data stored in foreign jurisdictions may be subject to different legal frameworks |
| **Vendor lock-in** | Difficulty migrating away from a CSP can reduce an organization's ability to respond to security concerns |
**Example:** **Illini Security** migrates its financial reporting application to a public cloud but fails to restrict access to a cloud storage bucket containing customer records. The storage is left with default public-read permissions, exposing sensitive data to anyone on the internet. This is a **misconfigured storage** risk.

---

## IoT Cybersecurity Risks

The **Internet of Things (IoT)** refers to physical devices (sensors, cameras, thermostats, industrial equipment) that connect to the internet and exchange data. IoT devices dramatically expand an organization's attack surface.
| Risk | Description |
|---|---|
| **Default credentials** | Many IoT devices ship with factory-default usernames and passwords that are never changed |
| **Lack of patching** | IoT manufacturers may not provide firmware updates, leaving known vulnerabilities unpatched |
| **Limited processing power** | Many IoT devices lack the computing resources to run encryption or security software |
| **Large attack surface** | Organizations may deploy thousands of IoT devices, each representing a potential entry point |
| **Botnet recruitment** | Compromised IoT devices are often recruited into botnets used to launch DDoS attacks |
| **Insecure communication** | IoT devices may transmit data without encryption, exposing it to interception |
| **Physical accessibility** | IoT devices are often deployed in public or uncontrolled locations where they can be physically tampered with |
:::note
The Mirai botnet attack (2016) demonstrated how compromised IoT devices — primarily security cameras and routers with default passwords — could be used to launch massive DDoS attacks. This illustrates why default credential management is a critical IoT control.
:::

---

## Mobile Technology Risks

Mobile devices (smartphones, tablets) present unique cybersecurity challenges because they operate outside the organization's physical security perimeter:
| Risk | Description |
|---|---|
| **BYOD (Bring Your Own Device)** | Personal devices used for work may lack enterprise security controls |
| **Jailbreaking / rooting** | Removing manufacturer security restrictions bypasses built-in protections and exposes the device to malware |
| **Unsecured Wi-Fi** | Connecting to public Wi-Fi networks exposes data to man-in-the-middle attacks |
| **App vulnerabilities** | Malicious or poorly coded apps can compromise data stored on the device |
| **Device loss or theft** | Lost or stolen devices may provide physical access to corporate data and applications |
| **Outdated operating systems** | Users who do not update their devices miss critical security patches |
| **Data leakage** | Corporate data can be inadvertently shared through personal cloud storage, messaging apps, or screenshots |
**Example:** An employee at **Kingfisher Industries** uses their personal smartphone (BYOD) to access the corporate email system. The employee connects to a public Wi-Fi hotspot at a coffee shop without using a VPN. An attacker on the same network performs a **man-in-the-middle attack** and intercepts the employee's email credentials.

---

## Threat Modeling and Threat Landscape

### Threat Modeling

**Threat modeling** is a structured process for identifying, quantifying, and addressing security threats to an application or system. It answers four key questions:

1. What are we building (or protecting)?
2. What can go wrong?
3. What are we going to do about it?
4. Did we do a good enough job?
   Common threat modeling methodologies:
   | Methodology | Description | Focus |
   |---|---|---|
   | **STRIDE** | Categorizes threats into six types: Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege | Application-level threats |
   | **PASTA** | Process for Attack Simulation and Threat Analysis — a seven-stage risk-centric methodology | Business risk alignment |
   | **Attack trees** | Graphical representations of possible attacks, with the goal at the root and attack methods as branches | Specific attack scenarios |
   | **DREAD** | Rates threats by Damage, Reproducibility, Exploitability, Affected users, Discoverability | Risk prioritization |

### Threat Landscape

The **threat landscape** refers to the complete set of potential and active threats facing an organization at any given time. It is shaped by:

- The organization's **industry** (healthcare, finance, government)
- The organization's **geographic location** and applicable regulations
- The organization's **technology stack** and attack surface
- Current **geopolitical events** and trending attack methods
- The organization's **public profile** and value as a target
  Organizations should regularly assess their threat landscape to ensure controls remain aligned with actual risks.

---

## Determining Threats to Third-Party Connections

Organizations do not operate in isolation. Connections with **customers, vendors, and partner organizations** create additional cybersecurity threats:
| Connection Type | Threats | Controls |
|---|---|---|
| **Vendor connections** | Compromised vendor systems can serve as an entry point (supply chain attack); vendors with excessive access may introduce risk | Vendor risk assessments, SOC reports, least-privilege access, network segmentation |
| **Customer portals** | External-facing systems are targets for web application attacks, credential stuffing, and DDoS | Web application firewalls (WAF), rate limiting, multi-factor authentication |
| **Partner integrations** | API-based integrations can expose data if APIs are insecure or partner systems are compromised | API security testing, mutual TLS authentication, data minimization |
| **Supply chain** | Malicious code or backdoors inserted into third-party software or hardware | Software composition analysis, hardware integrity verification, vendor due diligence |
**Example:** **Illini Entertainment** integrates its ticketing system with a third-party payment processor via an API. If the payment processor is compromised, attackers could potentially pivot through the API connection to access Illini Entertainment's customer database. This is a **supply chain risk** that requires vendor risk assessment and network segmentation controls.

---

## Determining Threats to On-Premise and Cloud Systems

CPAs must be able to analyze the specific cybersecurity threats to an organization's applications, networks, and connected devices:
| Asset Category | Key Threats | Analysis Considerations |
|---|---|---|
| **On-premise applications** | Unpatched vulnerabilities, insider threats, physical access attacks | Patch management processes, access controls, physical security |
| **Cloud-based applications** | Misconfiguration, identity attacks, API exploitation | Cloud security posture management, IAM policies, CSP SOC reports |
| **Networks** | Man-in-the-middle attacks, unauthorized access, DDoS, lateral movement | Network segmentation, firewall rules, intrusion detection/prevention |
| **Mobile devices** | Device loss, malware, unsecured connections, data leakage | MDM solutions, encryption, remote wipe, app whitelisting |
| **IoT devices** | Default credentials, firmware vulnerabilities, botnet recruitment | Network isolation, credential management, firmware updates |
:::tip[Exam Tip]
When analyzing threats in a scenario, consider the **specific context** of the organization. A healthcare organization faces different primary threats (patient data theft, ransomware disrupting care) than a financial services firm (wire fraud, trading system manipulation). The threat analysis must be tailored to the organization's industry, data types, and technology environment.
:::

---

## Summary

| Topic                    | Key Takeaway                                                                                                                                        |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Threat agents            | Classified as internal/external and by motivation (financial, political, espionage); nation-state actors are the most sophisticated                 |
| Types of attacks         | Include physical attacks, DDoS, malware, social engineering, web application attacks, and mobile attacks                                            |
| Cyber-attack techniques  | Buffer overflow, SQL injection, XSS, replay attacks, and others exploit specific technical vulnerabilities — most are prevented by input validation |
| Stages of a cyber-attack | Attacks progress through reconnaissance → access → privilege escalation → persistence → exploitation → covering tracks                              |
| Cloud risks              | Shared responsibility gaps, misconfigured storage, API vulnerabilities, and data co-mingling are primary concerns                                   |
| IoT risks                | Default credentials, inability to patch, and large attack surfaces make IoT devices attractive targets for botnets                                  |
| Mobile risks             | BYOD, unsecured Wi-Fi, device loss, and jailbreaking create entry points outside the organization's perimeter                                       |
| Threat modeling          | Structured methods (STRIDE, PASTA) to identify and prioritize threats; the threat landscape is the full picture of active and potential threats     |
| Third-party threats      | Vendor connections, supply chain attacks, and partner integrations require vendor risk assessments and network segmentation                         |

---

## Practice Questions

1. **Gies Co.** is a mid-sized manufacturing company. A security analyst discovers that an attacker has been present in the network for six months, slowly exfiltrating intellectual property related to a proprietary manufacturing process. The attacker appears to be well-funded and uses custom malware not seen in any public threat database. How should this threat agent be classified?
2. **MAS Inc.** receives a report that its cloud-based HR application has a storage bucket containing employee Social Security numbers that is accessible to anyone with the URL — no authentication required. What type of cloud cybersecurity risk does this represent, and what is the most likely root cause?
3. **Kingfisher Industries** operates a smart building with 2,000 IoT sensors monitoring temperature, lighting, and security cameras. The IT security team has never changed the factory-default credentials on these devices. During a recent audit, several sensors were found to be sending traffic to unknown external IP addresses. What IoT-specific risk has materialized, and what stage of the cyber-attack lifecycle does the observed behavior represent?
   :::tip[Answers]
4. This is an **Advanced Persistent Threat (APT)**, likely **nation-state sponsored**. The key indicators are: (a) prolonged, stealthy presence (six months), (b) sophisticated custom malware, (c) targeting of intellectual property, and (d) substantial resources and patience. APTs are external, nation-state or state-sponsored threat actors focused on long-term intelligence gathering.
5. This represents a **misconfigured storage** risk — the most common cloud security failure. The root cause is a **shared responsibility gap**: the CSP provides the tools to secure storage buckets, but it is the customer's (MAS Inc.'s) responsibility to configure proper access controls. Someone either left the default public-access setting unchanged or incorrectly configured the bucket's permissions.
6. The materialized risk is **botnet recruitment** due to **default credentials**. The devices were compromised because factory-default passwords were never changed — a fundamental IoT security failure. The observed behavior (traffic to unknown external IPs) indicates the devices have reached the **Command & Control (C2) stage** of the cyber-attack lifecycle, where compromised devices communicate with the attacker's infrastructure to receive instructions.
   :::
