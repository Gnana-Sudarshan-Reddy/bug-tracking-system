package com.bugtracker.controller;

import com.bugtracker.model.Bug;
import com.bugtracker.model.BugStatus;
import com.bugtracker.service.BugService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/bugs")
public class BugController {

    @Autowired
    private BugService bugService;

    @PostMapping
    public ResponseEntity<Bug> createBug(@RequestBody Bug bug) {
        return ResponseEntity.ok(bugService.createBug(bug));
    }

    @GetMapping
    public ResponseEntity<List<Bug>> getAllBugs() {
        return ResponseEntity.ok(bugService.getAllBugs());
    }

    @GetMapping("/assignee/{assigneeId}")
    public ResponseEntity<List<Bug>> getBugsByAssignee(@PathVariable Long assigneeId) {
        return ResponseEntity.ok(bugService.getBugsByAssignee(assigneeId));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Bug> getBugById(@PathVariable Long id) {
        Optional<Bug> bug = bugService.getBugById(id);
        return bug.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<Bug> updateStatus(@PathVariable Long id, @RequestParam BugStatus status) {
        try {
            return ResponseEntity.ok(bugService.updateBugStatus(id, status));
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}/assign/{assigneeId}")
    public ResponseEntity<Bug> assignBug(@PathVariable Long id, @PathVariable Long assigneeId) {
        try {
            return ResponseEntity.ok(bugService.assignBug(id, assigneeId));
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
