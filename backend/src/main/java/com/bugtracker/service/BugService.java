package com.bugtracker.service;

import com.bugtracker.model.Bug;
import com.bugtracker.model.BugStatus;
import com.bugtracker.model.User;
import com.bugtracker.repository.BugRepository;
import com.bugtracker.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BugService {

    @Autowired
    private BugRepository bugRepository;

    @Autowired
    private UserRepository userRepository;

    public Bug createBug(Bug bug) {
        return bugRepository.save(bug);
    }

    public List<Bug> getAllBugs() {
        return bugRepository.findAll();
    }

    public List<Bug> getBugsByAssignee(Long assigneeId) {
        return bugRepository.findByAssigneeId(assigneeId);
    }

    public Optional<Bug> getBugById(Long id) {
        return bugRepository.findById(id);
    }

    public Bug updateBugStatus(Long id, BugStatus status) {
        Optional<Bug> optionalBug = bugRepository.findById(id);
        if (optionalBug.isPresent()) {
            Bug bug = optionalBug.get();
            bug.setStatus(status);
            return bugRepository.save(bug);
        }
        throw new RuntimeException("Bug not found");
    }

    public Bug assignBug(Long id, Long assigneeId) {
        Optional<Bug> optionalBug = bugRepository.findById(id);
        Optional<User> optionalUser = userRepository.findById(assigneeId);
        if (optionalBug.isPresent() && optionalUser.isPresent()) {
            Bug bug = optionalBug.get();
            bug.setAssignee(optionalUser.get());
            return bugRepository.save(bug);
        }
        throw new RuntimeException("Bug or User not found");
    }
}
