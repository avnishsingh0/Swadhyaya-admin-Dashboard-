import React, { useState, useEffect } from 'react';
import style from './ListTable.module.css';
import { users } from '../../db';
import maleAvatar from '../../resources/avatar_male.jpg';
import femaleAvatar from '../../resources/avatar_female.jpg';
import { BsThreeDotsVertical } from 'react-icons/bs'

const ListTable = () => {
    const [filteredUsers, setFilteredUsers] = useState(users);
    const [statusCounts, setStatusCounts] = useState({
        All: users.length,
        Active: 0,
        Pending: 0,
        Banned: 0,
        Rejected: 0,
    });
    const [selectedFilters, setSelectedFilters] = useState({
        preparingFor: {
            Banking: false,
            Railway: false,
            SSC: false,
        },
        academics: {
            Graduate: false,
            Postgraduate: false,
            PhD: false,
        },
    });
    const [searchInput, setSearchInput] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        updateStatusCounts(filteredUsers);
    }, [filteredUsers]);

    useEffect(() => {
        filterUsers();
    }, [selectedFilters, searchInput]);

    const updateStatusCounts = (filteredUsers) => {
        const counts = {
            All: filteredUsers.length,
            Active: filteredUsers.filter((user) => user.status === 'Active').length,
            Pending: filteredUsers.filter((user) => user.status === 'Pending').length,
            Banned: filteredUsers.filter((user) => user.status === 'Banned').length,
            Rejected: filteredUsers.filter((user) => user.status === 'Rejected').length,
        };
        setStatusCounts(counts);
    };

    const filterUsersByStatus = (status) => {
        if (status === 'All') {
            setFilteredUsers(users);
        } else {
            const filtered = users.filter((user) => user.status === status);
            setFilteredUsers(filtered);
        }
    };

    const filterUsers = () => {
        let filtered = users;

        if (Object.values(selectedFilters.preparingFor).some(Boolean)) {
            filtered = filtered.filter((user) =>
                Object.keys(selectedFilters.preparingFor).some(
                    (filter) => selectedFilters.preparingFor[filter] && user.preparingFor.includes(filter)
                )
            );
        }

        if (Object.values(selectedFilters.academics).some(Boolean)) {
            filtered = filtered.filter((user) =>
                Object.keys(selectedFilters.academics).some(
                    (filter) => selectedFilters.academics[filter] && user.academics === filter
                )
            );
        }

        if (searchInput) {
            const searchValue = searchInput.toLowerCase();
            filtered = filtered.filter((user) =>
                user.name.toLowerCase().includes(searchValue) ||
                user.email.toLowerCase().includes(searchValue) ||
                user.phone.includes(searchValue)
            );
        }

        setFilteredUsers(filtered);
    };

    const handleFilterChange = (category, filter) => {
        setSelectedFilters((prevFilters) => ({
            ...prevFilters,
            [category]: {
                ...prevFilters[category],
                [filter]: !prevFilters[category][filter],
            },
        }));
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
    };

    return (
        <div className={style.listTable}>
            <div className={style.status}>
                {Object.keys(statusCounts).map((status, index) => (
                    <div className={`${style.status} ${style[status]}`} key={index} onClick={() => filterUsersByStatus(status)}>
                        <p>{status}</p>
                        <p>{statusCounts[status]}</p>
                    </div>
                ))}
            </div>
            <div className={style.sort}>
                <div className={style.dropdown}>
                    <button onClick={toggleDropdown} onBlur={closeDropdown}>
                        Filter
                    </button>
                    {dropdownOpen && (
                        <div className={style.dropdownContent}>
                            <div>
                                {Object.keys(selectedFilters.preparingFor).map((filter, index) => (
                                    <label key={index}>
                                        <input
                                            type="checkbox"
                                            checked={selectedFilters.preparingFor[filter]}
                                            onChange={() => handleFilterChange('preparingFor', filter)}
                                        />
                                        <p>{filter}</p>

                                    </label>
                                ))}
                            </div>
                            <div>
                                {Object.keys(selectedFilters.academics).map((filter, index) => (
                                    <label key={index}>
                                        <input
                                            type="checkbox"
                                            checked={selectedFilters.academics[filter]}
                                            onChange={() => handleFilterChange('academics', filter)}
                                        />
                                        <p>{filter}</p>
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                <input
                    type="text"
                    id="search"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    placeholder="Search..."
                />
                <BsThreeDotsVertical />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" name="" id="" />
                        </th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Academics</th>
                        <th>Preparing For</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map((user, index) => (
                        <tr key={index}>
                            <td>
                                <input type="checkbox" name="" id="" />
                            </td>
                            <td>
                                {user.gender === 'male' ? (
                                    <img src={maleAvatar} alt={user.name} />
                                ) : (
                                    <img src={femaleAvatar} alt={user.name} />
                                )}
                                <div>
                                    <div>{user.name}</div>
                                    <div>{user.email}</div>
                                </div>
                            </td>
                            <td>{user.phone}</td>
                            <td>{user.academics}</td>
                            <td>{user.preparingFor.join(', ')}</td>
                            <td>{user.status}</td>
                            <td>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListTable;
