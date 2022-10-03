'use strict';

const url = require('url');

module.exports = {

    async index(ctx) {

        const { title } = ctx.params
        console.log(title);

        // const valueFromUrl = Object.values(queryObject);
        // console.log(valueFromUrl[0]);

        const result = await strapi.query('course').model.find({
            $text: { $search: title }
        });

        return result;

    },

    async title(ctx) {
        const { body } = ctx.request
        const { title } = body;
        strapi.log.debug(`Trying to create course with only title ${title}`)

        await strapi.services.course.create(body);
        ctx.send({ message: 'Courses saved to db' });
    },
    async findAll(ctx) {

        let entities;
        ctx.query = {
            ...ctx.query,
            _limit: -1,
          };

        entities = await strapi.query('course').model.find({});

        return entities;

    },
    //    async title(ctx) {
    // //         let courseName = [

    // //             {
    // //                 "Course Code": "DevNet Associate"
    // //             },
    // //             {
    // //                 "Course Code": "Implementing Cisco Enterprise Advanced Routing and Services (ENARSI)"
    // //             },
    // //             {
    // //                 "Course Code": "Implementing Cisco SD-WAN Solutions (SDWAN300)"
    // //             },
    // //             {
    // //                 "Course Code": "Designing Cisco Enterprise Networks (ENSLD)"
    // //             },
    // //             {
    // //                 "Course Code": "Designing Cisco Enterprise Wireless Networks (ENWLSD)"
    // //             },
    // //             {
    // //                 "Course Code": "Implementing Cisco Enterprise Wireless Networks (ENWLSI)"
    // //             },
    // //             {
    // //                 "Course Code": "Implementing Automation for Cisco Enterprise Solutions (ENAUI)"
    // //             },
    // //             {
    // //                 "Course Code": "Implementing and Operating Cisco Collaboration Core Technologies (CLCOR)"
    // //             },
    // //             {
    // //                 "Course Code": "Implementing Cisco Collaboration Applications (CLICA)"
    // //             },
    // //             {
    // //                 "Course Code": "Implementing Cisco Advanced Call Control and Mobility Services (CLACCM)"
    // //             },
    // //             {
    // //                 "Course Code": "Implementing Cisco Collaboration Cloud and Edge Solutions (CLCEI)"
    // //             },
    // //             {
    // //                 "Course Code": "Implementing Automation for Cisco Collaboration Solutions (CLAUI)"
    // //             },
    // //             {
    // //                 "Course Code": "Implementing and Operating Cisco Data Center Core Technologies (DCCOR)"
    // //             },
    // //             {
    // //                 "Course Code": "Designing Cisco Data Center Infrastructure (DCID)"
    // //             },
    // //             {
    // //                 "Course Code": "Troubleshooting Cisco Data Center Infrastructure (DCIT)"
    // //             },
    // //             {
    // //                 "Course Code": "Implementing Cisco Application Centric Infrastructure (DCACI)"
    // //             },
    // //             {
    // //                 "Course Code": "Configuring Cisco MDS 9000 Series Switches (DCMDS)"
    // //             },
    // //             {
    // //                 "Course Code": "Introducing Automation for Cisco Solutions (CSAU)"
    // //             },
    // //             {
    // //                 "Course Code": "Implementing Automation for Cisco Data Center Solutions (DCAUI)"
    // //             },
    // //             {
    // //                 "Course Code": "Implementing and Operating Cisco Security Core Technologies (SCOR"
    // //             },
    // //             {
    // //                 "Course Code": "Securing Networks with Cisco Firepower Next Generation Firewall (SSNGFW)"
    // //             },
    // //             {
    // //                 "Course Code": "Securing Networks with Cisco Firepower Next-Generation IPS (SSFIPS)"
    // //             },
    // //             {
    // //                 "Course Code": "Implementing and Configuring Cisco Identity Services Engine (SISE)"
    // //             },
    // //             {
    // //                 "Course Code": "Securing Email with Cisco Email Security Appliance (SESA)"
    // //             },
    // //             {
    // //                 "Course Code": "Securing the Web with Cisco Web Security Appliance (SWSA)"
    // //             },
    // //             {
    // //                 "Course Code": "Implementing Secure Solutions with Virtual Private Networks (SVPN)"
    // //             },
    // //             {
    // //                 "Course Code": "Implementing Automation for Cisco Security Solutions (SAUI)"
    // //             },
    // //             {
    // //                 "Course Code": "Implementing and Operating Cisco Service Provider Network Core Technologies (SPCOR)"
    // //             },
    // //             {
    // //                 "Course Code": "Implementing Cisco Service Provider Advanced Routing Solutions (SPRI)"
    // //             },
    // //             {
    // //                 "Course Code": "Implementing Cisco Service Provider VPN Services (SVPI)"
    // //             },
    // //             {
    // //                 "Course Code": "Implementing Automation for Cisco Service Provider Solutions (SPAUI)"
    // //             },
    // //             {
    // //                 "Course Code": "Ethical Hacker (CEH)"
    // //             },
    // //             {
    // //                 "Course Code": "Incident Handler (ECIH)�"
    // //             },
    // //             {
    // //                 "Course Code": "Network Defender (CND)"
    // //             },
    // //             {
    // //                 "Course Code": "Forensics Investigator (CHFI)"
    // //             },
    // //             {
    // //                 "Course Code": "Certified SOC Analyst (CSA)�"
    // //             },
    // //             {
    // //                 "Course Code": "Threat Intelligence Analyst (CTIA)"
    // //             },
    // //             {
    // //                 "Course Code": "Ethical Hacking Core Skills (EHCS)"
    // //             },
    // //             {
    // //                 "Course Code": "Encryption Specialist (ECES)�"
    // //             },
    // //             {
    // //                 "Course Code": "Security Analyst (ECSA)"
    // //             },
    // //             {
    // //                 "Course Code": "Licensed Penetration Tester (LPT)"
    // //             },
    // //             {
    // //                 "Course Code": "Secure Computer User (CSCU)�"
    // //             },
    // //             {
    // //                 "Course Code": "Disaster Recovery Professional (EDRP)"
    // //             },
    // //             {
    // //                 "Course Code": "Cyber SAFE"
    // //             },
    // //             {
    // //                 "Course Code": "IRBIZ"
    // //             },
    // //             {
    // //                 "Course Code": "Cybersec First Responder"
    // //             },
    // //             {
    // //                 "Course Code": "IOTBIZ"
    // //             },
    // //             {
    // //                 "Course Code": "Certified IoT practitioner"
    // //             },
    // //             {
    // //                 "Course Code": "Certified IoT Security Practitioner"
    // //             },
    // //             {
    // //                 "Course Code": "AIBIZ"
    // //             },
    // //             {
    // //                 "Course Code": "Certified AI practitioner"
    // //             },
    // //             {
    // //                 "Course Code": "Hardware A+"
    // //             },
    // //             {
    // //                 "Course Code": "Network+"
    // //             },
    // //             {
    // //                 "Course Code": "Security+"
    // //             },
    // //             {
    // //                 "Course Code": "Cloud+"
    // //             },
    // //             {
    // //                 "Course Code": "Linux+"
    // //             },
    // //             {
    // //                 "Course Code": "Server+"
    // //             },
    // //             {
    // //                 "Course Code": "CySA+"
    // //             },
    // //             {
    // //                 "Course Code": "PenTest+"
    // //             },
    // //             {
    // //                 "Course Code": "Citrix Virtual Apps and Desktops 7 Administration On-Premises and in Citrix Cloud"
    // //             },
    // //             {
    // //                 "Course Code": "Citrix Virtual Apps and Desktops 7 Advanced Administration"
    // //             },
    // //             {
    // //                 "Course Code": "Citrix Virtual Apps and Desktops 7 Assessment, Design and Advanced Configuration"
    // //             },
    // //             {
    // //                 "Course Code": "Citrix Virtual Apps and Desktops 7, App Layering, and WEM Administration (Fast-Track)"
    // //             },
    // //             {
    // //                 "Course Code": "Moving to the Citrix Virtual Apps and Desktops Service on Citrix Cloud with Microsoft Azure"
    // //             },
    // //             {
    // //                 "Course Code": "Citrix Virtual Apps and Desktops 7 Advanced Deployment, Troubleshooting, Security and Administration"
    // //             },
    // //             {
    // //                 "Course Code": "Citrix XenServer 7.1 LTSR Administration"
    // //             },
    // //             {
    // //                 "Course Code": "Manage Citrix Endpoint Management"
    // //             },
    // //             {
    // //                 "Course Code": "Citrix Content Collaboration Enterprise Essentials"
    // //             },
    // //             {
    // //                 "Course Code": "Citrix ADC 12.x Essentials and Traffic Management"
    // //             },
    // //             {
    // //                 "Course Code": "Citrix Gateway 12.x"
    // //             },
    // //             {
    // //                 "Course Code": "Citrix ADC 12.x Essentials and Citrix Gateway"
    // //             },
    // //             {
    // //                 "Course Code": "Citrix Networking Assessment, Design, and Advanced Configuration"
    // //             },
    // //             {
    // //                 "Course Code": "Citrix ADC 12.x Essentials"
    // //             },
    // //             {
    // //                 "Course Code": "Citrix ADC 12.x Traffic Management"
    // //             },
    // //             {
    // //                 "Course Code": "Deploy and Manage Citrix SD-WAN 11.x"
    // //             },
    // //             {
    // //                 "Course Code": "Citrix ADC 12.x Advanced Concepts - Security, Management and Optimization"
    // //             },
    // //             {
    // //                 "Course Code": "Citrix ADC 12.x Advanced Concepts � Secure Web Applications"
    // //             },
    // //             {
    // //                 "Course Code": "Citrix ADC 12.x Advanced Concepts - Management and Optimization"
    // //             },
    // //             {
    // //                 "Course Code": "Google Cloud Fundamentals: Core Infrastructure�(GCF-CI)"
    // //             },
    // //             {
    // //                 "Course Code": "Architecting with Google Compute Engine�(AGCE)"
    // //             },
    // //             {
    // //                 "Course Code": "Architecting with Google Cloud Platform: Design and Process�(AGCP-DP)"
    // //             },
    // //             {
    // //                 "Course Code": "Google Cloud Platform Fundamentals for AWS Professionals�(GCP-FAP)"
    // //             },
    // //             {
    // //                 "Course Code": "Preparing for the Professional Cloud Architect Examination�(PPCAE)"
    // //             },
    // //             {
    // //                 "Course Code": "Networking in Google Cloud Platform�(NGCP)"
    // //             },
    // //             {
    // //                 "Course Code": "Security in Google Cloud Platform�(SGCP)"
    // //             },
    // //             {
    // //                 "Course Code": "Google Cloud Fundamentals: Big Data and Machine Learning�(GCF-BDM)"
    // //             },
    // //             {
    // //                 "Course Code": "Data Engineering on Google Cloud Platform�(DEGCP)"
    // //             },
    // //             {
    // //                 "Course Code": "From Data to Insights with Google Cloud Platform�(DIGCP)"
    // //             },
    // //             {
    // //                 "Course Code": "Machine Learning with TensorFlow on Google Cloud Platform�(MLTF)"
    // //             },
    // //             {
    // //                 "Course Code": "Developing Applications with Google Cloud Platform�(DAGCP)"
    // //             },
    // //             {
    // //                 "Course Code": "Getting Started with Google Kubernetes Engine�(GCP-GSGKE)"
    // //             },
    // //             {
    // //                 "Course Code": "Architecting Hybrid Cloud Infrastructure with Anthos (T-AHYBRID-I)"
    // //             },
    // //             {
    // //                 "Course Code": "Red Hat Application Development I: Programming in Java EE OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Build and Administer APIs with Red Hat 3scale API Management OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Red Hat JBoss Application Administration I OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Red Hat JBoss Application Administration II OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Developing Application Business Rules with Red Hat Decision Manager OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Red Hat Decision Manager and Process Automation Manager for Business Users OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Red Hat Decision Manager and Process Automation Manager for Developers OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Camel Integration and Development with Red Hat Fuse on OpenShift OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Developing Workflow Applications with Red Hat JBoss BPM Suite OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Red Hat AMQ Administration OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Red Hat Ceph 3 Storage Architecture and Administration OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Red Hat OpenStack Administration I: Core Operations for Domain Operators OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Red Hat OpenStack Administration II: Day 2 Operations for Cloud Operators OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Cloud Storage With Red Hat Ceph Storage OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Red Hat OpenStack Administration III: Networking and Foundations of NFV OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Introduction to Red Hat OpenShift Applications OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Red Hat OpenShift I: Containers & Kubernetes OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Red Hat OpenShift Administration II: Operating a Production Kubernetes Cluster OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Red Hat Application Development: Building Microservices with Quarkus OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Containers, Kubernetes, and Red Hat OpenShift Administration II OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Red Hat OpenShift Development II: Containerizing Applications OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Containers, Kubernetes, and Red Hat OpenShift Development II OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Red Hat OpenShift Installation Lab OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Red Hat OpenShift Administration II with Installation Lab OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Building Resilient Microservices with Istio and Red Hat OpenShift Service Mesh OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Building Microservices with Quarkus, Istio, and Red Hat OpenShift OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Red Hat Cloud-native Microservices Development with Quarkus OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Red Hat OpenShift Administration III: Scaling Kubernetes Deployments in the Enterprise OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Developing Red Hat OpenShift Operators OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Red Hat DevOps Pipelines and Processes: GI/CD with Jenkins, Git, and Test Driven Development (TDD) OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Red Hat DevOps Pipelines and Processes: CI/CD with Jenkins OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Red Hat DevOps Pipelines and Processes: Git and Test Driven Development (TDD) OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Microsoft Windows Automation with Red Hat Ansible OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Red Hat Security: Securing Containers and OpenShift OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Advanced Automation: Red Hat Ansible Best Practices OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Red Hat Ansible for Network Automation OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Programming with Python for Red Hat Ansible Automation Platform OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Red Hat Training: DevOps Culture and Practice Enablement OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Red Hat Container Adoption Boot Camp for Administrators OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Red Hat Container Adoption Boot Camp for Developers OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Red Hat System Administration I OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Red Hat System Administration II OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "RHCSA Rapid Track Course OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Red Hat Gluster Storage Administration OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Red Hat System Administration III: Data Center Services for Red Hat Enterprise Linux 7 OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Red Hat Enterprise Linux for SAP Solutions Workshop OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Red Hat Enterprise Linux Automation with Ansible OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "RHCE Certification Lab OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Red Hat Virtualization OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Red Hat Enterprise Linux Diagnostics and Troubleshooting OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Red Hat Enterprise Linux 8 New Features for Experienced Linux Administrators OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Red Hat Services Management and Automation OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Red Hat Security: Identity Management and Active Directory Integration OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Red Hat Satellite 6 Administration OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Red Hat Security: Linux in Physical, Virtual, and Cloud OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Red Hat High Availability Clustering OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Red Hat Performance Tuning: Linux in Physical, Virtual, and Cloud OnSite Training"
    // //             },
    // //             {
    // //                 "Course Code": "Google Cloud Platform Fundamentals: Core Infrastructure"
    // //             },
    // //             {
    // //                 "Course Code": "Architecting with Google Compute Engine"
    // //             },
    // //             {
    // //                 "Course Code": "Architecting with Google Kubernetes Engine"
    // //             },
    // //             {
    // //                 "Course Code": "Data Engineering on Google Cloud Platform"
    // //             },
    // //             {
    // //                 "Course Code": "Architecting Hybrid Cloud Infrastructure with Anthos"
    // //             },
    // //             {
    // //                 "Course Code": "Big Data and Machine Learning Fundamentals"
    // //             },
    // //             {
    // //                 "Course Code": "Networking in Google Cloud"
    // //             },
    // //             {
    // //                 "Course Code": "Security in Google Cloud Platform"
    // //             },
    // //             {
    // //                 "Course Code": "Migrating to Google Cloud"
    // //             },
    // //             {
    // //                 "Course Code": "Getting Started with Google Kubernetes Engine"
    // //             },
    // //             {
    // //                 "Course Code": "Developing Applications with Google Cloud Platform"
    // //             },
    // //             {
    // //                 "Course Code": "Introduction to Cloud Identity"
    // //             },
    // //             {
    // //                 "Course Code": "AWS Technical Essentials"
    // //             },
    // //             {
    // //                 "Course Code": "Architecting on AWS"
    // //             },
    // //             {
    // //                 "Course Code": "System Operations on AWS"
    // //             },
    // //             {
    // //                 "Course Code": "Developing on AWS"
    // //             },
    // //             {
    // //                 "Course Code": "Advanced Architecting on AWS"
    // //             },
    // //             {
    // //                 "Course Code": "DevOps Engineering on AWS"
    // //             },
    // //             {
    // //                 "Course Code": "Security Operations on AWS"
    // //             },
    // //             {
    // //                 "Course Code": "Big Data on AWS"
    // //             },
    // //             {
    // //                 "Course Code": "Data Warehousing on AWS"
    // //             },
    // //             {
    // //                 "Course Code": "Advance Networking on AWS"
    // //             },
    // //             {
    // //                 "Course Code": "Advanced Developing on AWS"
    // //             },
    // //             {
    // //                 "Course Code": "Architecting on AWS - Accelerator"
    // //             },
    // //             {
    // //                 "Course Code": "AWS Security Essentials"
    // //             },
    // //             {
    // //                 "Course Code": "Planning and Designing Databases on AWS"
    // //             },
    // //             {
    // //                 "Course Code": "Machine Learning Pipeline on AWS"
    // //             },
    // //             {
    // //                 "Course Code": "Azure Administration for AWS SysOps"
    // //             },
    // //             {
    // //                 "Course Code": "Microsoft Azure solutions for AWS Developers"
    // //             },
    // //             {
    // //                 "Course Code": "Microsoft Azure technologies for AWS Architects"
    // //             },
    // //             {
    // //                 "Course Code": "Microsoft Azure Administrator"
    // //             },
    // //             {
    // //                 "Course Code": "Planning and Administering Microsoft Azure for SAP Workloads"
    // //             },
    // //             {
    // //                 "Course Code": "Configuring and Operating Windows Virtual Desktop on Microsoft Azure"
    // //             },
    // //             {
    // //                 "Course Code": "Developing Solutions for Microsoft Azure"
    // //             },
    // //             {
    // //                 "Course Code": "Microsoft Azure IoT Developer"
    // //             },
    // //             {
    // //                 "Course Code": "Microsoft Azure Architect Technologies (consolidation & major update of AZ-300T0X courses)"
    // //             },
    // //             {
    // //                 "Course Code": "Microsoft Azure Architect Design (consolidation & major update of AZ-301T0X courses)"
    // //             },
    // //             {
    // //                 "Course Code": "Designing and Implementing Microsoft DevOps Solutions"
    // //             },
    // //             {
    // //                 "Course Code": "Microsoft Azure Security Technologies"
    // //             },
    // //             {
    // //                 "Course Code": "Configuring and Operating a Hybrid Cloud with Microsoft Azure Stack Hub (will replace 20537)"
    // //             },
    // //             {
    // //                 "Course Code": "Microsoft Azure Fundamentals"
    // //             },
    // //             {
    // //                 "Course Code": "Windows Server 2019 Administration"
    // //             },
    // //             {
    // //                 "Course Code": "Windows Server 2019 Hybrid and Azure IaaS"
    // //             },
    // //             {
    // //                 "Course Code": "Azure Stack HCI"
    // //             },
    // //             {
    // //                 "Course Code": "Migrating Application Workloads to Azure"
    // //             },
    // //             {
    // //                 "Course Code": "Designing and Implementing an Azure AI Solution (will be replaced by AI-102T00)"
    // //             },
    // //             {
    // //                 "Course Code": "Designing and Implementing a Microsoft Azure AI Solution (replacing AI-100T01)"
    // //             },
    // //             {
    // //                 "Course Code": "Microsoft Azure AI Fundamentals"
    // //             },
    // //             {
    // //                 "Course Code": "Analyzing Data with Microsoft Power BI (replacing 20778)"
    // //             },
    // //             {
    // //                 "Course Code": "Migrate SQL workloads to Azure"
    // //             },
    // //             {
    // //                 "Course Code": "Migrate NoSQL workloads to Azure Cosmos DB"
    // //             },
    // //             {
    // //                 "Course Code": "Migrate Open Source Data Workloads to Azure"
    // //             },
    // //             {
    // //                 "Course Code": "Querying Data with Microsoft Transact-SQL (replacing 20761)"
    // //             },
    // //             {
    // //                 "Course Code": "Designing and Implementing a Data Science solution on Azure"
    // //             },
    // //             {
    // //                 "Course Code": "Implementing an Azure Data Solution (to be replaced by DP-203T00)"
    // //             },
    // //             {
    // //                 "Course Code": "Designing an Azure Data Solution (to be replaced by DP-203T00)"
    // //             },
    // //             {
    // //                 "Course Code": "Data Engineering on Microsoft Azure (will replace both DP-200 and DP-201)"
    // //             },
    // //             {
    // //                 "Course Code": "Administering Relational Databases on Microsoft Azure"
    // //             },
    // //             {
    // //                 "Course Code": "Microsoft Azure Data Fundamentals"
    // //             },
    // //             {
    // //                 "Course Code": "Windows 10"
    // //             },
    // //             {
    // //                 "Course Code": "Managing Modern Desktops"
    // //             },
    // //             {
    // //                 "Course Code": "Office 365 Administrator"
    // //             },
    // //             {
    // //                 "Course Code": "Microsoft 365 Identity and Services"
    // //             },
    // //             {
    // //                 "Course Code": "Microsoft 365 Mobility and Security"
    // //             },
    // //             {
    // //                 "Course Code": "Microsoft 365 Messaging (consolidation & update of MS-200T0X and MS-201T0X courses)"
    // //             },
    // //             {
    // //                 "Course Code": "Manage SharePoint and OneDrive in Microsoft 365 \n"
    // //             },
    // //             {
    // //                 "Course Code": "SharePoint Hybrid Deployment and Migration \n"
    // //             },
    // //             {
    // //                 "Course Code": "Building Applications and Solutions with Microsoft 365 Core Services"
    // //             },
    // //             {
    // //                 "Course Code": "Managing Microsoft Teams"
    // //             },
    // //             {
    // //                 "Course Code": "Microsoft 365 Fundamentals"
    // //             },
    // //             {
    // //                 "Course Code": "Microsoft Dynamics 365 Sales"
    // //             },
    // //             {
    // //                 "Course Code": "Microsoft Dynamics 365 Marketing"
    // //             },
    // //             {
    // //                 "Course Code": "Microsoft Dynamics 365 Customer Service"
    // //             },
    // //             {
    // //                 "Course Code": "Microsoft Dynamics 365 Field Service"
    // //             },
    // //             {
    // //                 "Course Code": "Microsoft Dynamics 365: Core Finance and Operations"
    // //             },
    // //             {
    // //                 "Course Code": "Microsoft Dynamics 365 Finance"
    // //             },
    // //             {
    // //                 "Course Code": "Microsoft Dynamics 365 Supply Chain Management, Manufacturing"
    // //             },
    // //             {
    // //                 "Course Code": "Microsoft Dynamics 365 Supply Chain Management"
    // //             },
    // //             {
    // //                 "Course Code": "Microsoft Dynamics 365 Commerce Functional Consultant"
    // //             },
    // //             {
    // //                 "Course Code": "Microsoft Dynamics 365: Finance and Operations Apps Developer"
    // //             },
    // //             {
    // //                 "Course Code": "Microsoft Dynamics 365 + Power Platform Solution Architect (will be replaced by PL-600T00)"
    // //             },
    // //             {
    // //                 "Course Code": "Microsoft Dynamics 365: Finance and Operations Apps Solution Architect"
    // //             },
    // //             {
    // //                 "Course Code": "Microsoft Dynamics 365 Business Central Functional Consultant"
    // //             },
    // //             {
    // //                 "Course Code": "Microsoft Dynamics 365 Fundamentals (retiring when exam retires; being replaced by MB-910T00 and MB-920T00)"
    // //             },
    // //             {
    // //                 "Course Code": "Microsoft Dynamics 365 Fundamentals (CRM)"
    // //             },
    // //             {
    // //                 "Course Code": "Microsoft Dynamics 365 Fundamentals (ERP)"
    // //             },
    // //             {
    // //                 "Course Code": "Microsoft Power Platform App Maker"
    // //             },
    // //             {
    // //                 "Course Code": "Microsoft Power Platform Functional Consultant"
    // //             },
    // //             {
    // //                 "Course Code": "Microsoft Power Platform Developer"
    // //             },
    // //             {
    // //                 "Course Code": "Power Platform Solution Architect (replacing MB-600T00)"
    // //             },
    // //             {
    // //                 "Course Code": "Microsoft Power Platform Fundamentals"
    // //             },
    // //             {
    // //                 "Course Code": "Microsoft 365 Security Administration"
    // //             },
    // //             {
    // //                 "Course Code": "Microsoft Security Operations Analyst"
    // //             },
    // //             {
    // //                 "Course Code": "Microsoft Identity and Access Administrator"
    // //             },
    // //             {
    // //                 "Course Code": "Microsoft Information Protection Administrator"
    // //             },
    // //             {
    // //                 "Course Code": "Microsoft Security, Compliance, and Identity Fundamentals"
    // //             },
    // //             {
    // //                 "Course Code": "MOC 10997C Office 365 Administration and Troubleshooting"
    // //             },
    // //             {
    // //                 "Course Code": "MOC 20334C Core Solutions of Microsoft Skype for Business 2015"
    // //             },
    // //             {
    // //                 "Course Code": "MOC 20337B Enterprise Voice and Online Services with Microsoft Lync Server 2013"
    // //             },
    // //             {
    // //                 "Course Code": "MOC 20345B Administering Microsoft Exchange Server 2016"
    // //             },
    // //             {
    // //                 "Course Code": "MOC 20347A Enabling and Managing Office 365"
    // //             },
    // //             {
    // //                 "Course Code": "MOC 20410 Installing and Configuring Windows Server 2012"
    // //             },
    // //             {
    // //                 "Course Code": "MOC 20411 Administering Windows Server 2012"
    // //             },
    // //             {
    // //                 "Course Code": "MOC 20412D Configuring Advanced Windows Server� 2012 Services"
    // //             },
    // //             {
    // //                 "Course Code": "MOC 20414C Implementing an Advanced Server Infrastructure"
    // //             },
    // //             {
    // //                 "Course Code": "MOC 20533E Implementing Microsoft Azure Infrastructure Solutions"
    // //             },
    // //             {
    // //                 "Course Code": "MOC 20535A� Architecting Microsoft Azure Solutions"
    // //             },
    // //             {
    // //                 "Course Code": "MOC 20740C Installation, Storage, and Compute with Windows Server 2016"
    // //             },
    // //             {
    // //                 "Course Code": "MOC 20741B Networking with Windows Server 2016"
    // //             },
    // //             {
    // //                 "Course Code": "MOC 20742B Identity with Windows Server 2016"
    // //             },
    // //             {
    // //                 "Course Code": "MOC 20743C Upgrading Your Skills to MCSA: Windows Server 2016"
    // //             },
    // //             {
    // //                 "Course Code": "MOC 20744 Securing Windows Server 2016"
    // //             },
    // //             {
    // //                 "Course Code": "MOC 20745 Implementing a Software-Defined DataCenter"
    // //             },
    // //             {
    // //                 "Course Code": "MOC 40365 Windows Server Administration Fundamentals"
    // //             },
    // //             {
    // //                 "Course Code": "MOC 40366B Networking Fundamentals"
    // //             },
    // //             {
    // //                 "Course Code": "MOC 40367B Security Fundamentals"
    // //             },
    // //             {
    // //                 "Course Code": "MOC 55007A System Center 2012 Orchestrator"
    // //             },
    // //             {
    // //                 "Course Code": "MOC 55070A Microsoft Lync 2013 Depth Support Engineer"
    // //             },
    // //             {
    // //                 "Course Code": "MOC MD100 Windows 10"
    // //             },
    // //             {
    // //                 "Course Code": "Nagios Core Basic and Advanced"
    // //             },
    // //             {
    // //                 "Course Code": "Nagios Xi -Basic Course"
    // //             },
    // //             {
    // //                 "Course Code": "Nagios XI- Advanced course"
    // //             },
    // //             {
    // //                 "Course Code": "Nagios Xi (Basic +Advanced +Customized topics)"
    // //             },
    // //             {
    // //                 "Course Code": "OTRS -ITSM Tool (Basic Course)"
    // //             },
    // //             {
    // //                 "Course Code": "OTRS -ITSM Tool (Advanced course)"
    // //             },
    // //             {
    // //                 "Course Code": "OTRS -ITSM Complete (Basic +Advanced +Integration with third party tools)"
    // //             },
    // //             {
    // //                 "Course Code": "Zabbix monitoring -Basic Course"
    // //             },
    // //             {
    // //                 "Course Code": "Zabbix monitoring -Advanced Course"
    // //             },
    // //             {
    // //                 "Course Code": "Zabbix Moitoring ( Basic + advanced + Integration with Third Party tools)"
    // //             },
    // //             {
    // //                 "Course Code": "Open NMS -Monitoring tool"
    // //             },
    // //             {
    // //                 "Course Code": "GLPI -ITSM Tool (Basic Course)"
    // //             },
    // //             {
    // //                 "Course Code": "GLPI -ITSM Tool (Advanced Course)"
    // //             },
    // //             {
    // //                 "Course Code": "GLPI -ITSM Tool (Basic +Advanced +Integrations and Customization)"
    // //             },
    // //             {
    // //                 "Course Code": "Open Source Stackstorm Training"
    // //             }
    // //         ]
    //          let courseNameManualTesting = [
    //             { 'Course Name': 'HP QTP with VB Scripting' },
    //             { 'Course Name': 'HP WinRunner' },
    //             { 'Course Name': 'HP Business Process Testing (BPT) with QTP & QC' },
    //             { 'Course Name': 'HP Load Runner VUGen' },
    //             { 'Course Name': 'HP Quality Center (QC)' },
    //             { 'Course Name': 'IBM Rational Performance Tester (RPT)' },
    //             { 'Course Name': 'IBM Rational Quality Manager (RQM)' },
    //             { 'Course Name': 'IBM Rational Functional Tester (RFT)' },
    //             { 'Course Name': 'Microsoft Test Manager (MTM)' },
    //             { 'Course Name': 'Microsoft Team Foundation Server (TFS)' },
    //             { 'Course Name': 'Compuware Test Partner' },
    //             { 'Course Name': 'Silk Test Basic and Advance' },
    //             { 'Course Name': 'Silk Performer Basic and Advance' },
    //             { 'Course Name': 'Silk Central Test Manager Test Management)' },
    //             { 'Course Name': 'Selenium Basic and Advance' },
    //             { 'Course Name': 'Test Management' }
    //           ]
    //         for (let i = 0; i < courseNameManualTesting.length; i++) {
    //             // const { body } = ctx.request
    //             const title = courseNameManualTesting[i][""];
    //             const body = {
    //                 "title": title

    //             }
    //             strapi.log.debug(`Trying to create course with only title ${title}`)

    //             await strapi.services.course.create(body);
    //             ctx.send({ message: 'Courses saved to db' });
    //         }

    //     }


    }

    
